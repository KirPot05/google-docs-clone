import { IconButton } from "@material-tailwind/react";
import { useSession, signOut } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between space-x-3 px-4 py-2 shadow-md md:space-x-10 md:py-4">
      {/* Logo Icon */}
      <div className="flex items-center md:space-x-3">
        <IconButton
          color="gray"
          variant="outlined"
          className="mt-1 hidden h-20 w-20 rounded-full border-0 md:inline-flex"
        >
          <span className="material-icons"> menu </span>
        </IconButton>

        <span className="material-icons text-4xl text-blue-600">
          {" "}
          description{" "}
        </span>

        <h2 className="ml-2 hidden text-[22px] leading-6 text-gray-700 md:inline-flex">
          Docs
        </h2>
      </div>

      {/* Search bar */}
      <div className="flex flex-grow items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700 focus-within:text-gray-600 focus-within:shadow-md">
        <span className="material-icons"> search </span>
        <input
          type="text"
          className="flex-grow bg-transparent px-5 text-base outline-none"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center">
        <IconButton
          color="gray"
          variant="outlined"
          className="mt-1 hidden h-20 w-20 rounded-full border-0 md:inline-flex"
        >
          <span className="material-icons text-gray-800"> apps </span>
        </IconButton>

        {/* Profile Image (as avatar) */}
        <img
          onClick={() => signOut()}
          src={session?.user?.image!}
          alt=""
          loading="lazy"
          className="ml-2 hidden h-12 w-12 cursor-pointer rounded-full bg-contain md:inline-flex"
        />
      </div>
    </div>
  );
}

export default Header;
