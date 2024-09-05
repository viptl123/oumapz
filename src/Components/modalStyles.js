// modalStyles.js
export const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)' // Semi-transparent black overlay
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#841617', // Background color for the modal content
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    width: '600px',
    height: '400px',
    color: 'white',
  },
};


export const inputFieldStyles = {
  marginTop: '5px',
  marginBottom: '5px',
  padding: '5px',
  width: '100%',
  color: 'black'
};

export const selectFieldStyles = {
  marginTop: '5px',
  marginBottom: '5px',
  padding: '5px',
  width: '100%',
  color: 'black'
};

export const closeButtonStyles = {
  backgroundColor: 'rgb(59 130 246)',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '0.25rem',
  borderBottom: '4px solid rgb(29 78 216)',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  color: 'white',
};


export const formGroupStyles = {
  marginBottom: '15px',
};

export const buttonContainer = {
  display: 'flex',
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
};