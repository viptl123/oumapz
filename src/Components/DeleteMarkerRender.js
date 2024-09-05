import React from 'react'
import { useAuth } from '../contexts/authContext.js';
import AddMarkerStyling from './AddMarkerStylings.js';
import DeleteMarkerButton from './DeleteMarkerButton.js';

const DeleteMarkerRender = () => {
    const { currentUser } = useAuth()

    const renderComponents = () => {
        const components = [];
        if (currentUser){

            components.push(<DeleteMarkerButton/>);

        }else {
            components.push(<div></div>)
        }
        return components;
    };

    return <div>{renderComponents()}</div>;
};

export default DeleteMarkerRender;