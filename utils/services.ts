import { db } from "./firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";

export async function createDocumentFile(input: string, email: string) {
  try {
    const collectionRef = collection(db, "userDocs", email, "docs");
    await addDoc(collectionRef, {
      fileName: input,
      timestamp: serverTimestamp(),
    });
  } catch (err) {
    console.log(err);
  }
}

export async function saveDocument(
  editorState: unknown,
  email: string,
  id: string
) {
  try {
    const docRef = doc(db, "userDocs", email, "docs", id);
    await setDoc(
      docRef,
      {
        editorState,
      },
      { merge: true }
    );
  } catch (err) {
    console.log(err);
  }
}
