import firebase from 'firebase';

let firebaseConfig = {
    apiKey: env.REACT_APP_FIRE_API_KEY,
    authDomain: env.REACT_APP_FIRE_AUTH_DOMAIN,
    projectId: env.REACT_APP_FIRE_PROJECT_ID,
    storageBucket: env.REACT_APP_FIRE_BUCKET,
    messagingSenderId: env.REACT_APP_FIRE_SENDER_ID,
    appId: env.REACT_APP_FIRE_APP_ID
  };
  // Initialize Firebase
let fire = firebase.initializeApp(firebaseConfig);
export default fire;