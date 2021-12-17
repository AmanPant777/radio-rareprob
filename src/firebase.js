import { initializeApp } from 'firebase/app';
import { getFirestore,} from 'firebase/firestore';
import {getAnalytics,initializeAnalytics } from 'firebase/analytics';



// const firebaseConfig = {
//     apiKey: "AIzaSyDvzWEeA6srWhGCfQePtgCPjsxXxIJjcr4",
//     authDomain: "rocks-page.firebaseapp.com",
//     projectId: "rocks-page",
//     storageBucket: "rocks-page.appspot.com",
//     messagingSenderId: "1010565077957",
//     appId: "1:1010565077957:web:f3b4efce06ef092b5b89ac"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyBQl_rgxzfy6YBPfkL0UltiWGhjSKOnTuA",
  authDomain: "rareprob-website.firebaseapp.com",
  projectId: "rareprob-website",
  storageBucket: "rareprob-website.appspot.com",
  messagingSenderId: "385888856053",
  appId: "1:385888856053:web:c0107b1885334c277de2bc",
  measurementId: "G-YSZH5VBYG5"
};

const app=initializeApp(firebaseConfig);
getAnalytics(app)
initializeAnalytics(app)
export const firestore = getFirestore();


