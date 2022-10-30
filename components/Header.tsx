import { IconButton } from "@material-tailwind/react";

function Header() {
  return (
    <div className="sticky top-0 z-10 flex items-center px-4 py-2 md:py-4 shadow-md justify-between space-x-3 md:space-x-10">
      {/* Logo Icon */}
      <div className="md:space-x-3 flex items-center">
        <IconButton
          color="gray"
          variant="outlined"
          className="hidden md:inline-flex h-20 w-20 mt-1 rounded-full border-0"
        >
          <span className="material-icons"> menu </span>
        </IconButton>

        <span className="material-icons text-4xl text-blue-600">
          {" "}
          description{" "}
        </span>

        <h2 className="hidden md:inline-flex ml-2 text-gray-700 text-[22px] leading-6">
          Docs
        </h2>
      </div>

      {/* Search bar */}
      <div className="flex flex-grow items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
        <span className="material-icons"> search </span>
        <input
          type="text"
          className="bg-transparent outline-none flex-grow px-5 text-base"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center">
        <IconButton
          color="gray"
          variant="outlined"
          className="hidden md:inline-flex h-20 w-20 mt-1 rounded-full border-0"
        >
          <span className="material-icons text-gray-800"> apps </span>
        </IconButton>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
          alt=""
          loading="lazy"
          className="hidden md:inline-flex cursor-pointer h-12 w-12 rounded-full ml-2 bg-contain"
        />
      </div>
    </div>
  );
}

export default Header;
