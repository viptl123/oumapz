import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

/*
This context was made by Tristen Pham
-> Implemented authentication context and associated functions
*/

const authContext = React.createContext()

export function useAuth() {
    return useContext(authContext) // function to allow other pages to use this context
}

export function AuthProvider({ children }) {
    const [currentUser, setcurrentUser] = useState() // allows updating/setting of user upon authentication changes

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password) // firebase function used to create user account
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password) // firebase function used to log in user
    }

    function logout() {
        return signOut(auth) // firebase function used to sign user out
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setcurrentUser(user) // sets the current user to the user parameter when logging in/out
        })

        return unsubscribe /* unsubscribes from the onAuthStateChanged listener when done mounting so 
        that it completes upon authentication change */
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return ( /* allows other pages to use this context through the provider, 
        applies its value to all child html tags of provider */
        <authContext.Provider value={value}>
            {children} 
        </authContext.Provider>
    )
}