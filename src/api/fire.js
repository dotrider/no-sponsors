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

// DB Tables

const db = firebase.database();

const addUser = (userId, username, email, password, profile_picture) => {
  db.ref('users/' + userId).set({
    username,
    email,
    password,
    profile_picture
  });
};

export const addPost = (userId, username, title, body) => {

  let newPost = {
    author: username,
    userId,
    body,
    title,
  };
  
  let newPostKey = db.ref().child('posts').push().key;

  let updates = {};
  updates['/post/' + newPostKey] = newPost;
  updates['/user-post/' + userId + '/' + newPostKey] = newPost;

  return db.ref().update(updates)
}



