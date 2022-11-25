import { db } from "./firebase";
import {
  collection,
  doc,
  addDoc,
  serverTimestamp,
  setDoc,
  getDoc,
} from "firebase/firestore";

export async function createDocumentFile(input: string, email: string) {
  try {
    const newDoc = {
      fileName: input,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, "docs"), newDoc);
  } catch (err) {
    console.log(err);
  }
}
