import { useEffect, useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { useRouter } from "next/dist/client/router";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useSession } from "next-auth/react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { saveDocument } from "../utils/services";

function TextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const docRef = doc(
    db,
    "userDocs",
    session?.user?.email as string,
    "docs",
    id as string
  );
  const [snapshot, loading] = useDocumentOnce(docRef);

  //   Fetching data at initial run
  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      const content = EditorState.createWithContent(
        convertFromRaw(snapshot?.data()?.editorState)
      );
      setEditorState(content);
    }
  }, [snapshot]);

  const onEditorStateChange = async (editorState: EditorState) => {
    setEditorState(editorState);
    const content = convertToRaw(editorState.getCurrentContent());
    await saveDocument(content, session?.user?.email as string, id as string);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-16">
      <Editor
        editorState={editorState}
        toolbarClassName="flex sticky top-0 z-10 !justify-center items-center mx-auto"
        editorClassName="mt-6 bg-white w-[21cm] mx-auto p-10 mb-12 min-h-[29.7cm] shadow-lg"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
}

export default TextEditor;
