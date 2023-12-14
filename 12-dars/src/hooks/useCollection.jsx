import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";

export function useCollection(c) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const ref = collection(db, c);

  useEffect(() => {
    const data = onSnapshot(ref, (snapshot) => {
      const results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(results);
    });

    return () => data();
  }, [c]);

  return { documents, error };
}
