import React from 'react'
import { useAuth } from '../contexts/authContext.js';
import AddMarkerStyling from './AddMarkerStylings.js';

const AddMarkerButton = () => {
    const { currentUser } = useAuth()

    const renderComponents = () => {
        const components = [];
        if (currentUser){
            
            components.push(<AddMarkerStyling/>);
            
        }else {
            components.push(<div></div>)
        }
        return components;
    };

    return <div>{renderComponents()}</div>;
};

export default AddMarkerButton;

