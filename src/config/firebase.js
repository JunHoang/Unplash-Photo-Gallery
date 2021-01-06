import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA0YGGo4WEdxeAH15fuhJkhFJSFbVspWfQ",
    authDomain: "unplash-photo-gallery.firebaseapp.com",
    projectId: "unplash-photo-gallery",
    storageBucket: "unplash-photo-gallery.appspot.com",
    messagingSenderId: "1022186848078",
    appId: "1:1022186848078:web:d615bab07831d556fba81f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;