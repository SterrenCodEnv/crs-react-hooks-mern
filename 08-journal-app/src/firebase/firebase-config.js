import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyB3hdjhhvNH0aAq5HGm9-KO7hz_1lXNVIU',
  authDomain: 'react-app-course-46b01.firebaseapp.com',
  projectId: 'react-app-course-46b01',
  storageBucket: 'react-app-course-46b01.appspot.com',
  messagingSenderId: '172263211901',
  appId: '1:172263211901:web:e9a4de1cfe582b4ae64214',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();
export { db, googleAuthProvider, firebaseApp };
