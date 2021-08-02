import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAjA3oAhvfNflXryd0fpIZqY5RtnPWAGN8',
  authDomain: 'music-ad700.firebaseapp.com',
  projectId: 'music-ad700',
  storageBucket: 'music-ad700.appspot.com',
  messagingSenderId: '740433756655',
  appId: '1:740433756655:web:c967fd69d99a2c4325f61a',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const userCollection = db.collection('users');

export { auth, db, userCollection };
