import React from 'react';
import Modal from 'react-modal';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/authContext';
import { useRouter } from 'next/router';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 300,
    backgroundColor: '#841617',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const LoggedInPopup = ()=> {
  const { currentUser } = useAuth()
  const { logout } = useAuth()
  const pageRouter = useRouter()
  const [modalIsOpen, setIsOpen] = useState(false);
  const heading = useRef();
  const message = useRef();
  const window = useRef();
  const artificialPadding = useRef();
  const artificialPaddingTwo = useRef();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    heading.current.style.color = '#FFFFFF';
    heading.current.style.fontSize = '48px';
    heading.current.style.textAlign = 'center';
    message.current.style.color = '#FFFFFF';
    message.current.style.fontSize = '24px';
    message.current.style.textAlign = 'center';
    artificialPadding.current.style.color = '#841617';
    artificialPaddingTwo.current.style.color = '#841617';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSignOut() {
    logout()
    .then(() => { // signs out user
        // Sign-out successful
        closeModal()
    }).catch((error) => {
        // An error happened.
    });
  }

  function handleMapRedirect() {
    pageRouter.push('/map')
  }

  useEffect(() => {
    if (currentUser) {
        openModal()
      }
  }, [currentUser])

  return (
    <div>
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Already Logged In"
        id ="modal"
        shouldCloseOnOverlayClick={false}
      >
        <div ref={window} className='w-full'>
          <h2 ref={heading}>Welcome Back!</h2>
          <p ref={artificialPaddingTwo}>&nbsp;</p>
          <p ref={message}>Seems like you are already signed in. Would you like to sign out or continue to the map?</p>
          <p ref={artificialPadding}>&nbsp;</p>
          <div className=''>
            <div className='flex w-full justify-between'>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleSignOut}>Sign Out</button>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleMapRedirect}>Continue to Map</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default LoggedInPopup;