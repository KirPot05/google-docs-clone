import { IconButton } from "@material-tailwind/react";
// import  from "next";
import Head from "next/head";
import Image from "next/image";
import DocList from "../components/DocList";
import Header from "../components/Header";
import { useSession, getSession } from "next-auth/react";
import Login from "../components/Login";
import { useState } from "react";
import Modal from "../components/common/Modal";
import { createDocumentFile } from "../utils/services";
import {
  useCollection,
  useCollectionOnce,
} from "react-firebase-hooks/firestore";
import { db } from "../utils/firebase";
import { query, orderBy, collection } from "firebase/firestore";
import { useRouter } from "next/dist/client/router";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") return <Login />;

  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");
  const [snapshot] = useCollectionOnce(
    query(
      collection(db, "userDocs", session?.user?.email!, "docs"),
      orderBy("timestamp", "desc")
    )
  );
  const router = useRouter();

  const toggleModal = () => setShowModal((state) => !state);

  const createDocument = async () => {
    if (input.length === 0) return;
    const docId = await createDocumentFile(input, session?.user?.email!);
    setInput("");
    toggleModal();
    router.push(`/doc/${docId}`);
  };

  return (
    <div>
      <Head>
        <title>Edit docs on the go!</title>
      </Head>

      <Header />

      <main className="bg-primary px-8 pb-10">
        <div className="mx-auto max-w-3xl">
          {/* Documents header section */}
          <div className="flex items-center justify-between py-4">
            <h2 className="text-lg text-gray-700">Start a new document</h2>
            <IconButton
              variant="outlined"
              className="border-0 text-gray-700"
              children={<span className="material-icons">more_vert</span>}
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            ></IconButton>
          </div>

          {/* Create a new Document Section */}
          <div>
            <div className="relative h-52 w-40 cursor-pointer border-2 hover:border-blue-700">
              <Image
                src="https://links.papareact.com/pju"
                onClick={toggleModal}
                layout="fill"
              />
            </div>
            <p>Blank</p>
          </div>
        </div>
      </main>

      {/* Modal Display */}
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        createDocument={createDocument}
        title="Create a new doc!"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full outline-none"
          placeholder="Enter name of the document"
          onKeyDown={(e) => e.key === "Enter" && createDocument()}
        />
      </Modal>

      <DocList snapshot={snapshot} />
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
