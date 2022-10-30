import { IconButton } from "@material-tailwind/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DocList from "../components/DocList";
import Header from "../components/Header";
import { useSession, getSession } from "next-auth/react";
import Login from "../components/Login";
import type { GetServerSideProps } from "next/types";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") return <Login />;

  return (
    <div>
      <Head>
        <title>Edit docs on the go!</title>
        {/* <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        /> */}
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
              <Image src="https://links.papareact.com/pju" layout="fill" />
            </div>
            <p>Blank</p>
          </div>
        </div>
      </main>

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
