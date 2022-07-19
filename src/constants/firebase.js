import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA42pB1iFhLgZjYOzaXC7fY6H2A3DQiC_g",
  authDomain: "lovymoment-c0c91.firebaseapp.com",
  databaseURL: "https://lovymoment-c0c91-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lovymoment-c0c91",
  storageBucket: "lovymoment-c0c91.appspot.com",
  messagingSenderId: "831935413675",
  appId: "1:831935413675:web:708a2fa8f548b2375ea6ee",
  measurementId: "G-EMFWE6K031"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)