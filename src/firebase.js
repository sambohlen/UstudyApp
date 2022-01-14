import { initializeApp } from 'firebase/app'
import { 
    getFirestore, collection, getDocs, addDoc,
} from 'firebase/firestore'
import {
    getAuth, signOut
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAdKT5nSrnq_Ws_Jqvp9_BmEPrJGSPyKHE",
    authDomain: "ustudylogin.firebaseapp.com",
    projectId: "ustudylogin",
    storageBucket: "ustudylogin.appspot.com",
    messagingSenderId: "70110398387",
    appId: "1:70110398387:web:456ae4eafb9b37e22f2dc6"
  };

// init firebase app
  const app = initializeApp(firebaseConfig)

  // init services
  export const db = getFirestore();
  export const auth = getAuth(app);

  export function logout() {
      return signOut(auth);
  }
