import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDb7JD39_bUQsX6JDLgbVwypI8RQpdvH24",
  authDomain: "enyeregisteruser.firebaseapp.com",
  databaseURL: "https://enyeregisteruser.firebaseio.com",
  projectId: "enyeregisteruser",
  storageBucket: "enyeregisteruser.appspot.com",
  messagingSenderId: "442901724140",
  appId: "1:442901724140:web:492aa5a0f46c3e8649dec9"
};

export default firebase.initializeApp(firebaseConfig);