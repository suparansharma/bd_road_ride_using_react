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


  export const initializeLoginFramework = () => {
    const app = initializeApp(firebaseConfig);
  }


    // Google Sign In method Start

    export const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
        return signInWithPopup(auth, googleProvider)
          .then((result) => {
            const { displayName, photoURL, email } = result.user;
            const signedInUser = {
              isSignedIn: true,
              name: displayName,
              email: email,
              photo: photoURL,
            };
            return signedInUser;
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



       //Facebook Sign In method Start

    
    export const hadleFacebookSignIn = () => {
    const fbProvider = new FacebookAuthProvider();
    const auth = getAuth();
   signInWithPopup(auth, fbProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log('Fb user after sign in', user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };
  //Facebook Sign In method End




  // Sign Out method Start

  //SignOut System
  export const handleGoogleSignOut = () => {
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
        return signedOutUser;
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // Sign Out method END

// create user functional work start
// export const CreateUserWithEmailAndPassword = () => {

//     const auth = getAuth();
//       createUserWithEmailAndPassword(auth, user.email, user.password)
//         .then((userCredential) => {
//           // Signed in
//           const newUserInfo = { ...user };
//           newUserInfo.error = '';
//           newUserInfo.success = true;
//           setUser(newUserInfo);
//           updateUserName(user.name);

//           // ...
//         })
//         .catch((error) => {
//           const newUserInfo = { ...user };
//           newUserInfo.error = error.message;
//           newUserInfo.success = false;
//           setUser(newUserInfo);

//           // ..
//         });
//     }

// // create user functional work end

// export const SignInWithEmailAndPassword = () => {
//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, user.email, user.password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         const newUserInfo = { ...user };
//         newUserInfo.error = '';
//         newUserInfo.success = true;
//         setUser(newUserInfo);
//         setLoggedInUser(newUserInfo);
//         console.log('sign is user info', userCredential.user);
//         // ...
//       })
//       .catch((error) => {
//         const newUserInfo = { ...user };
//         newUserInfo.error = error.message;
//         newUserInfo.success = false;
//         setUser(newUserInfo);
//       });
// }



//  //Send name in information to firebase start
//  const updateUserName = (name) => {
//     const auth = getAuth();
//     updateProfile(auth.currentUser, {
//       displayName: name,
//     })
//       .then(() => {
//         console.log('User name updated successfully');
//       })
//       .catch((error) => {
//         // An error occurred
//         console.log(error);
//         // ...
//       });
//   };

//   //Send name in information to firebase end