import React, { useState } from 'react';
import Modal from 'react-modal';
import { modalStyles, inputFieldStyles, selectFieldStyles, closeButtonStyles, formGroupStyles } from './modalStyles.js'; 
import RenderUserMarkers from './RenderUserMarkers.js';


const DeleteMarkerButton = () =>{
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }
    const handleSubmit =() =>{
      closeModal();
    }

    return (
        <div>
      <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={openModal}>Delete Markers</button>
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
        contentLabel="Example Modal"
        id="modal"
      >
        <div style={{ marginBottom: '20px' }}>
        <RenderUserMarkers/>
        </div>
        <button onClick={handleSubmit} style={{ backgroundColor: 'crimson', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', display: 'block', margin: '0 auto' }}>Finish</button>
      </Modal>
    </div>
    )
}
export default DeleteMarkerButton;