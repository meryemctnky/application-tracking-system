import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'apptrack-5c3a1.firebaseapp.com',
  databaseURL: process.env.REACT_APP_BASE_URL,
  projectId: 'apptrack-5c3a1',
  storageBucket: 'apptrack-5c3a1.appspot.com',
  messagingSenderId: '915385732775',
  appId: '1:915385732775:web:b952aed397ea393cfb1582',
  measurementId: 'G-GBT88H63XH',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
