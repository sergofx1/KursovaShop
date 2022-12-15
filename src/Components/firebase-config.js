import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyC12lghBzshWIN8AIljKCDcycRzXA0n4hc",
  authDomain: "shop-a4de7.firebaseapp.com",
  databaseURL: "https://shop-a4de7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shop-a4de7",
  storageBucket: "shop-a4de7.appspot.com",
  messagingSenderId: "872481468603",
  appId: "1:872481468603:web:a235d5d9924e01f939f99e",
  measurementId: "G-WMBD722YJE"
  };

const appDB = initializeApp(firebaseConfig);
export const confirmationDB = getAuth(appDB);
export const DB = getDatabase(appDB);






















const app = initializeApp(firebaseConfig);
export const confirmation = getAuth(app);
export const db = getDatabase(app);