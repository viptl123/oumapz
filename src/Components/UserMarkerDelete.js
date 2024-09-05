import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from '../../firebase.js';
import Modal from 'react-modal';
import { modalStyles, inputFieldStyles, selectFieldStyles, closeButtonStyles, formGroupStyles } from './modalStyles.js'; 

const UserMarkersDelete = ({ markerID }) => {
    const [data, setData] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, "CustomMarker", markerID);
            const docSnap = await getDoc(docRef);
            setData(docSnap.data());
        };

        fetchData();
    }, [markerID]); // Fetch data whenever markerID changes

    if (!data) {
        return <div>Loading...</div>;
    }
    
    const lastIndex = markerID.lastIndexOf("-");
    const result = markerID.substring(0, lastIndex);
    

    const handleButtonClick = () => {
        openModal();
    };
    function arrayWithoutMarker(array, marker) {
        let arrayOfLetter = [];
        let index;
        for(let i =0; i < array.length; i++){
            if (array[i] !== marker){
                arrayOfLetter.push(array[i]);
            }else {
                index =i;
            }
        }
        return {
            arrayOfLetter, 
            index
        }
    }

    function removeIndex(array, index){
        const newArr = []
        for (let i =0; i < array.length; i++){
            if (i != index){
                newArr.push(array[i])
            }
        }
        return newArr;

    }

    const handleConfirmDelete = async () => {

        
        // update users collection
        
        const user = auth.currentUser;
        const docRef = doc(db, "users", user.email)
        
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            const userData = docSnap.data(); 
            const markers = userData.Markers;  
            const arraydata = arrayWithoutMarker(markers, markerID);
            const newArray = arraydata.arrayOfLetter;
            const markerdate = userData.MarkerAddDate;
            const ar = removeIndex(markerdate, arraydata.index);
            await setDoc(doc(db, "users", user.email), { 
                Markers: newArray,
                MarkerAddDate: ar,
              })
        }
        
        // update Dates For Custom Markers
        // not sure if result is right
        const ref = doc(db, "DatesForCustomMarkers", result)
        const dref = await getDoc(ref);
    
        if (dref.exists()){
            const datesData = dref.data(); 
            const markers = datesData.CustomMarkerIDArray; 
            
            const fireData = arrayWithoutMarker(markers, markerID);
            const updatedMarkers = fireData.arrayOfLetter;
            const upcount = datesData.count
            await setDoc(doc(db, "DatesForCustomMarkers", result), {
                CustomMarkerIDArray: updatedMarkers,
                count: upcount
              })
        }
        // update custom Markers (optional)
        window.location.reload()
        closeModal();
    };
    
    

    return (
        <div>
            <button style={buttonStyle} onClick={handleButtonClick}>
                <div style={textStyle}>Event Title: {data.eventName}</div>
                <div style={textStyle}>Description: {data.description}</div>
                <div style={textStyle}>Date: {result}</div>
                <div style={textStyle}>Start Time: {data.startTime}</div>
                <div style={textStyle}>Location: {data.eventLocation}</div>
            </button>
            
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                ...modalStyles,
                content: {
                    ...modalStyles.content,
                    backgroundColor: '#f9f9f9',
                    padding: '20px',
                    border: 'none'
                }
                }}
                
                id="modal"
                contentLabel="Are you sure?"
            >
                <h2>Are you sure you want to delete?</h2>
                <button style={yesButtonStyle} onClick={handleConfirmDelete}>Yes</button>
                <button style={noButtonStyle} onClick={closeModal}>No</button>
            </Modal>
        </div>
    );
};

// Define CSS styles
const buttonStyle = {
    backgroundColor: "#ccc",
    borderRadius: "8px",
    padding: "10px",
    margin: "5px 0",
};

const textStyle = {
    marginBottom: "5px",
};

const yesButtonStyle = {
    backgroundColor: "gray",
    borderRadius: "8px",
    padding: "10px",
    margin: "5px",
    float: "left",
};

const noButtonStyle = {
    backgroundColor: "gray",
    borderRadius: "8px",
    padding: "10px",
    margin: "5px",
    float: "right",
};

export default UserMarkersDelete;