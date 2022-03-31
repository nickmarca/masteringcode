import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAv7qiN2EVjt6zNdBT9UDj4Nx7tN8MCMpk',
  authDomain: 'masteringcode-70ccd.firebaseapp.com',
  projectId: 'masteringcode-70ccd',
  storageBucket: 'masteringcode-70ccd.appspot.com',
  messagingSenderId: '526265156751',
  appId: '1:526265156751:web:186d6bd0418b67d4641cfa',
  measurementId: 'G-Z3930886NV',
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
