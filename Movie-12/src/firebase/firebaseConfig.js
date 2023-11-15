import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANcdRn04E5rzGNNAYVH7mx4y8ve_HL8jI",
  authDomain: "movie-7b423.firebaseapp.com",
  projectId: "movie-7b423",
  storageBucket: "movie-7b423.appspot.com",
  messagingSenderId: "899774991104",
  appId: "1:899774991104:web:da53b9012b6270f551c1e5",
  measurementId: "G-R20VGPHTYT"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export { db, auth };





