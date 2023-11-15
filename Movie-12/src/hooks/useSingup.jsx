import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";

export function useSingup() {
 
  const [error, setError] = useState(null);
  

  const signup = (displayName, email, password) => {
   
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        await updateProfile(auth.currentUser, {
          displayName,
        })
        dispatch({type: "LOGIN", payload: user})

      })
      .catch((error) => {
        setError(error);
      });
  };

  return { signup, error };
}
