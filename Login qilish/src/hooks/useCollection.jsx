import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";

export function useCollection(col) {
  const [documents, setDocuments] = useState(null);

  const c = collection(db, col);
  useEffect(() => {
    onSnapshot(c, (snapshot) => {
      const docs = []
      snapshot.docs.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setDocuments(docs);
    });
  }, [col]);
  return { documents };
}
