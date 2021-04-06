import firebase from 'firebase';

let firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRE_API_KEY,
    authDomain: process.env.REACT_APP_FIRE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIRE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIRE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIRE_SENDER_ID,
    appId: process.env.REACT_APP_FIRE_APP_ID
  };
  // Initialize Firebase
let fire = firebase.initializeApp(firebaseConfig);
export default fire;