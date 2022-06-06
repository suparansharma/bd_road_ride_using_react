import React, { useState } from 'react';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    FacebookAuthProvider,
  } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import firebaseConfig from './firebase.config';
  

const Login = () => {

    const[newUser,setNewUser] = useState(false);

    const app = initializeApp(firebaseConfig    );
    const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: '',
      photo: '',
    });

     // Google Sign In method Start

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        console.log(displayName, photoURL, email);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  };
  // Google Sign In method END


  // Sign Out method Start

    //SignOut System
    const handleGoogleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            const signedOutUser = {
              isSignedIn: false,
              name: '',
              email: '',
              password: '',
              photo: '',
              error: '',
              success: false,
            };
            setUser(signedOutUser);
          })
          .catch((error) => {
            // An error happened.
          });
      };
  
  
    // Sign Out method END

    return (
        <div>
             
            <div className="registrationArea">
            <h2>Create An Account</h2>
              {/* Google Sign In method Start */}
            {user.isSignedIn ? (
        <button onClick={handleGoogleSignOut}>Google SignOut</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Google SignIn</button>
      )}

{user.isSignedIn && (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Your Email:{user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}
      {/* Google Sign In method END */}
<br/>
            <form action="">
                
            </form>
            

            </div>
        </div>
    );
};

export default Login;