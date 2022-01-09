// Import the functions you need from the SDKs you need
//to use firebase app
import firebase from 'firebase/compat/app'; //v9
//to use auth
import 'firebase/compat/auth'; //v9
//to use firestore
import 'firebase/compat/firestore'; //v9
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDywHbCxvcPeawhYyy22lJqosnb-EPk80Q',
  authDomain: 'photo-gallery-7f0ca.firebaseapp.com',
  projectId: 'photo-gallery-7f0ca',
  storageBucket: 'photo-gallery-7f0ca.appspot.com',
  messagingSenderId: '842875566952',
  appId: '1:842875566952:web:5910a0096a68a4059534dd',
  measurementId: 'G-4CFXHP8YJC',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
