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

    // const newDoc = {
    //   docId: docRef.id,
    //   fileName: input,
    //   createdAt: new Date(Date.now()).toISOString(),
    // };
    // console.log(newDoc);
    const document = await getDoc(docRef);

    if (document.exists()) {
      console.log(document.data());
    } else {
      throw new Error("failed to fetch doc");
    }
  } catch (err) {
    console.log(err);
  }
}