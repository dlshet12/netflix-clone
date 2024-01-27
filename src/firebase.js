import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDorD7tiWK6--bkGMrflHqaGDH6PSa5omg',
  authDomain: 'netflix-clone-32af4.firebaseapp.com',
  projectId: 'netflix-clone-32af4',
  storageBucket: 'netflix-clone-32af4.appspot.com',
  messagingSenderId: '494880389828',
  appId: '1:494880389828:web:c3ba80c83f69375bbf2791',
};

const fireBaseApp = initializeApp(firebaseConfig);
const db = getFirestore(fireBaseApp);
const auth = getAuth(fireBaseApp);

export { auth };
export default db;
