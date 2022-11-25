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
    const docRef = doc(db, "docs", "WXUsSCRqDuOUqanC2pv5");

    const newDoc = {
      docId: docRef.id,
      fileName: input,
      createdAt: serverTimestamp(),
    };

    const addedDoc = await addDoc(collection(db, "docs"), newDoc);

    console.log(addedDoc);
  } catch (err) {
    console.log(err);
  }
}
