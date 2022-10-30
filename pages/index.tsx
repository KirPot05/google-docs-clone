import { IconButton } from "@material-tailwind/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DocList from "../components/DocList";
import Header from "../components/Header";

const Home: NextPage = () => {
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
