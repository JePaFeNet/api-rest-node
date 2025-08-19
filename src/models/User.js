import { db } from "./firebase.js";

import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const usersCollection = collection(db, "users");

export const createUser = async (email, passwordHash) => {
  try {
    const docRef = await addDoc(usersCollection, { email, passwordHash });
    return { id: docRef.id, email };
  } catch (error) {
    console.log(error);
  }
};

export const findUserByEmail = async (email) => {
  try {
    const q = query(usersCollection, where("email", "==", email));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
