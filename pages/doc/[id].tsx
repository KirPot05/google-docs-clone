import Head from "next/head";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/dist/client/router";
import { useSession, getSession, signOut } from "next-auth/react";
import Login from "../../components/Login";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { GetServerSideProps } from "next";
import TextEditor from "../../components/TextEditor";

function Document() {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") return <Login />;

  const router = useRouter();
  const { id } = router.query;
  const docRef = doc(
    db,
    "userDocs",
    session?.user?.email!,
    "docs",
    id as string
  );
  const [snapshot, loading] = useDocumentOnce(docRef);

  //   Redirect users to index route if they try to access the docs which they dont have access to
  if (!loading && !snapshot?.data()?.fileName) router.replace("/");

  return (
    <div>
      <Head>
        <title> {snapshot?.data()?.fileName} </title>
      </Head>

      <header className="flex items-center justify-between p-3 pb-1">
        <span
          onClick={() => router.push("/")}
          className="material-icons cursor-pointer text-5xl text-blue-600"
        >
          {" "}
          description{" "}
        </span>

        <div className="flex-grow px-2">
          <h2> {snapshot?.data()?.fileName} </h2>
          <div className="-ml-1 flex h-8 items-center space-x-2 text-sm text-gray-600">
            <p className="option">File</p>
            <p className="option">Edit </p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
            <p className="option">About</p>
          </div>
        </div>

        <Button className="hidden h-10 items-center space-x-1 md:!inline-flex">
          {" "}
          <span className="material-icons"> group </span>
          <span>Share</span>{" "}
        </Button>
        <img
          onClick={() => signOut()}
          src={session?.user?.image!}
          alt=""
          loading="lazy"
          className="mx-2 hidden h-12 w-12 cursor-pointer rounded-full bg-contain md:inline-flex"
        />
      </header>

      <TextEditor />
    </div>
  );
}

export default Document;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
