import { db } from "./firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";

export async function createDocumentFile(input: string, email: string) {
  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const userSnap = await getDocs(q);

    let userId: string;
    userSnap.forEach((user) => {
      userId = user.id;
    });

    const collectionRef = collection(db, "userDocs", userId!, "docs");
    await addDoc(collectionRef, {
      fileName: input,
      timestamp: serverTimestamp(),
    });
  } catch (err) {
    console.log(err);
  }
}
