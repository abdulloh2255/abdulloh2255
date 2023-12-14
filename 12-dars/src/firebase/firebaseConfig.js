import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApgi8m15wZP--d5khxX9FU4BOJLoN_cr8",
  authDomain: "my-exmple.firebaseapp.com",
  projectId: "my-exmple",
  storageBucket: "my-exmple.appspot.com",
  messagingSenderId: "785170113168",
  appId: "1:785170113168:web:4b83aab5ca8177b6a5ee15"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export { db, auth };
