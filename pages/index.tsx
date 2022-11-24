import { IconButton } from "@material-tailwind/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DocList from "../components/DocList";
import Header from "../components/Header";
import { useSession, getSession } from "next-auth/react";
import Login from "../components/Login";
import type { GetServerSideProps } from "next/types";
import { useState } from "react";
import Modal from "../components/common/Modal";
import { createDocumentFile } from "../utils/services";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") return <Login />;

  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");
  const toggleModal = () => setShowModal((state) => !state);

  const createDocument = async () => {
    if (input.length === 0) return;

    await createDocumentFile(input, session?.user?.email!);
    setInput("");
    toggleModal();
  };

  return (
    <div>
      <Head>
        <title>Edit docs on the go!</title>
      </Head>

      <Header />

      <main className="bg-primary pb-10 px-8">
        <div className="max-w-3xl mx-auto">
          {/* Documents header section */}
          <div className="py-4 flex items-center justify-between">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>
            <IconButton variant="outlined" className="border-0 text-gray-700">
              <span className="material-icons">more_vert</span>
            </IconButton>
          </div>

          {/* Create a new Document Section */}
          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
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
          className="outline-none w-full"
          placeholder="Enter name of the document"
          onKeyDown={(e) => e.key === "Enter" && createDocument()}
        />
      </Modal>

      <DocList />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
