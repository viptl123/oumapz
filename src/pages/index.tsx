// pages/index.tsx
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/authContext';
import LoggedInModal from '../Components/LoggedInModal'

/*
This page was created by Mahnoor Saeed and Vishnu Patel
Page, layout and styling was created by Mahnoor Saeed
Firebase functions(handleUserCreation, loginUser, addData, and getData) 
were created by Vishnu Patel
*/

const LoginPage = () => {
  const pageRouter = useRouter()
  // email variable that is changed in input
  let [email, setEmail] = useState('');
  // password varibale to be changed in input
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // e is just a temporary variable (event handler) because this function is embedded in the 
  // submit form function in order to test it
  const { login } = useAuth() // gets login function from authContext
  const { logout } = useAuth()

 
 
  // e is event handler
const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
  // prevent default form behavior
  e.preventDefault();
  // check authentication in firebase
  login(email, password) // calls login function from authContext
  .then(() => {
    // reroute user to map page upon successful login
    pageRouter.push('/map')
    // ...
  })
  .catch((error: Error) => {
    /* Commented out by Tristen Pham because error needed type Error but Error type does not have 'code' property
    // print error message from firebase
    const errorCode = error.code; Error does not have 'code' property
    */
    const errorMessage = error.message;
  });
}

function handleGuest() {
  logout()
  .then(() => { // signs out user
    // Sign-out successful, reroutes user to map page
    pageRouter.push('/map')
  }).catch((error: Error) => {
    // An error happened.
  });
}


  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source src="https://ou.edu/content/dam/theres-only-one/Longform_Web.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div className={styles.container}>
      <h1 className="w-full flex justify-center text-8xl text-white font-semibold">OU Mapz</h1>
      <div className={styles.loginFormContainer}>
        <form onSubmit={(e) => loginUser(e)} // please don't edit this line, or if you are just save original version as well -vishnu 
        className={styles.loginForm}> 
          <h2 className={styles.loginTitle}>Sign in</h2>
          <input
            type="email" // Ensuring this input is for emails
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
            required
          />
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
              required
            />
            <span className={styles.togglePassword} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'hide' : 'show'}
            </span>
          </div>
          <button type="submit" className={styles.loginButton}>Sign in</button>
          <button onClick={() => pageRouter.push('/register')}type="submit" className={styles.loginButton}>Register</button> 
        </form>
        <button onClick={() => handleGuest()}type="submit" className={styles.loginButton}>Continue as Guest</button>
      </div>
      <LoggedInModal/>
    </div>
    </div>
  );
  
};

export default LoginPage;
