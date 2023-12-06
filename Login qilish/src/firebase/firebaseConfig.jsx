import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCxoYkB2pDt20uVyLGYUKkSsJOUFO5TPTQ",
  authDomain: "my-login-270e8.firebaseapp.com",
  projectId: "my-login-270e8",
  storageBucket: "my-login-270e8.appspot.com",
  messagingSenderId: "150368843155",
  appId: "1:150368843155:web:2204b8c22d32a2f710a466",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app)
    