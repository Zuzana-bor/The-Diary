import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAgE7Sxp_FofJQeuipoQgXtc6zPAGxb7b8',
  authDomain: 'diary-558e9.firebaseapp.com',
  projectId: 'diary-558e9',
  storageBucket: 'diary-558e9.appspot.com',
  messagingSenderId: '913779242453',
  appId: '1:913779242453:web:6824e4ed5a534b99f4795c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
