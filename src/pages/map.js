// pages/map.js
import React, { useRef, useEffect, useState } from 'react';
import MyMap from '../Components/MyMap';
import styles from '../styles/Home.module.css';
import {auth} from '../../firebase.js';
import {signOut} from 'firebase/auth';
import { useAuth } from '../contexts/authContext'

import { Container } from 'postcss';
import { useRouter } from 'next/router';

import Popup from 'reactjs-popup';
import AddMarkerButton from '../Components/AddMarkerButton.js';
import DeleteMarkerRender from '../Components/DeleteMarkerRender.js';

const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState(['Organizations', 'University of Oklahoma', 'Activities nearby']);
  const { currentUser } = useAuth() // gets currentUser from authContext
  const [logButtonText, setLogButtonText] = useState('Sign In');
  const pageRouter = useRouter()

  // const { currentUser } = useAuth() // gets currentUser from authContext


  // Function to handle search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
    // Implement search functionality here
    // You might want to filter your suggestions based on the input
  };
  

  // Function to handle suggestion selection
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    // Implement what happens when you click a suggestion
  };

  // Tristen Pham
  const logButton = useRef();
  useEffect(() => {
   if (currentUser) {
    setLogButtonText("Sign Out")
   }
   else {
    setLogButtonText("Sign In")
   }
  }, [currentUser]) /* currentUser is a dependency (hiding addMarkerButton depends on whether user is logged in) 
  so it needs to be included in the dependency array */
  


  function handleUserAuth() {
    if (currentUser) {
      signOut(auth).then(() => { // signs out user
        // Sign-out successful.
        console.log("logged out")
      }).catch((error) => {
        // An error happened.
      });
    }
    else {
      pageRouter.push("/login")
    }
  }

  // Xin, Add the addmarker button and the signin/signout button

  
  return (
    <div className={styles.pageContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search OUMapz"
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // hides suggestions with a delay 1
            className={styles.searchInput} />
          {showSuggestions && (

            <ul className={styles.suggestions}>

              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={styles.suggestionItem}
                >
                  {suggestion}
                </li>

              ))}
            </ul>
          )}

        </div>
        <div className='flex h-full items-end justify-center'>
          <div className="flex w-full justify-between">
            <button ref={logButton} className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => handleUserAuth()}>{logButtonText}</button>
            <AddMarkerButton />
            <DeleteMarkerRender/>
          </div>
        </div>

      </aside>

      <main className={styles.mapContainer}> 
        <h1 className="flex justify-center text-4xl font-semibold bg-gradient-to-b from-red-300 to-red-900 text-white">OU MAPZ</h1>
        <MyMap />
      </main>
    </div>
  );
};

export default MapPage;