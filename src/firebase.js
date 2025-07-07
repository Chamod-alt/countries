// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZAV3vsX5zF04MSK8h9kmIfONrZRt2hOA",
    authDomain: "countries-86002.firebaseapp.com",
    projectId: "countries-86002",
    storageBucket: "countries-86002.firebasestorage.app",
    messagingSenderId: "129153981803",
    appId: "1:129153981803:web:a575b73bfd6a17abd1002e",
    measurementId: "G-7YWG0K2KKQ"
  };
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
 /* 


 {
  "rules": {
    ".read": "now < 1754418600000",  // 2025-8-6
    ".write": "now < 1754418600000",  // 2025-8-6
  }
}
 */