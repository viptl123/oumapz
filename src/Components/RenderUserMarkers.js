import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { auth } from "../../firebase";
import UserMarkersDelete from "./UserMarkerDelete";
import { doc, getDoc } from "firebase/firestore";

const RenderUserMarkers = () => {
    const [components, setComponents] = useState([]);

    useEffect(() => {
        const fetchMarkers = async () => {
            const user = auth.currentUser;
            const email = user.email;
            const docRef = doc(db, "users", email);
            const docSnap = await getDoc(docRef);
            const markersComponents = [];

            if (docSnap.exists()) {
                const dateData = docSnap.data();
                const markers = dateData.Markers;

                for (let i = 0; i < markers.length; i++) {
                    markersComponents.push(<UserMarkersDelete key={i} markerID={markers[i]} />);
                }
            } else {
                markersComponents.push(<span key="no-markers">No Markers to Delete</span>);
            }

            setComponents(markersComponents);
        };

        fetchMarkers();
    }, []); // empty dependency array ensures the effect runs only once

    // Chunk the components array into groups of three
    const chunkedComponents = components.reduce((acc, cur, idx) => {
        const groupIndex = Math.floor(idx / 3);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(cur);
        return acc;
    }, []);

    return (
        <div>
            {chunkedComponents.map((group, idx) => (
                <div key={idx} style={rowStyle}>
                    {group}
                </div>
            ))}
        </div>
    );
};

// Define CSS style for the row
const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
};

export default RenderUserMarkers;