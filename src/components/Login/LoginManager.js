import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

export  const handleSignOut = () => {
    return firebase
      .auth()
      .signOut()
      .then((response) => {
        const signedOutUser = {
          isSignedIn: false,
          name: "",
          photo: "",
          email: "",
          password: "",
        };
        return signedOutUser;
      })
      .catch((err) => {});
  };


  export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
          const {displayName, photoURL, email} = result.user;
          const signedInUser = {
              isSignedIn: true,
              name:displayName,
              email:email,
              photoURL:photoURL,
              success: true
          };
        var user = result.user;
        return signedInUser;
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };