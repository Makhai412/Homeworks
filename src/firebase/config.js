import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBaRcRMqnQWv0HVTpWH_glCjukd_MSJR0c",
  authDomain: "pruebafirebase-50ae0.firebaseapp.com",
  projectId: "pruebafirebase-50ae0",
  storageBucket: "pruebafirebase-50ae0.appspot.com",
  messagingSenderId: "784176516105",
  appId: "1:784176516105:web:9819d9d84efab95d6a7cd8",
  measurementId: "G-LGVL1M6BTQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseStorage = getStorage(firebaseApp);


export { firebaseApp, auth, firebaseStorage};