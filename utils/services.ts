import { db } from "./firebase";
import { collection, doc, addDoc, serverTimestamp } from "firebase/firestore";

export async function createDocumentFile(input: string, email: string) {
  try {
    const docRef = doc(db, "userDocs", email);

    const newDoc = await addDoc(collection(db, "docs"), {
      docId: docRef.id,
      fileName: input,
      createdAt: serverTimestamp(),
    });
    console.log(newDoc);
  } catch (err) {
    console.log(err);
  }
}
