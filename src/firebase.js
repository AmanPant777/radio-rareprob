import { initializeApp } from 'firebase/app';
import { getFirestore,} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDvzWEeA6srWhGCfQePtgCPjsxXxIJjcr4",
    authDomain: "rocks-page.firebaseapp.com",
    projectId: "rocks-page",
    storageBucket: "rocks-page.appspot.com",
    messagingSenderId: "1010565077957",
    appId: "1:1010565077957:web:f3b4efce06ef092b5b89ac"
  };

initializeApp(firebaseConfig);
export const firestore = getFirestore();


