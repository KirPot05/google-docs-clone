import { useRouter } from "next/dist/client/router";
import { Timestamp } from "firebase/firestore";
import { IconButton } from "@material-tailwind/react";

type Props = {
  fileName: string;
  date: Timestamp;
  id: string;
};

function DocumentRow({ fileName, date, id }: Props) {
  const router = useRouter();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => router.push(`/doc/${id}`)}
      className="flex cursor-pointer items-center rounded-lg p-4 text-gray-700 hover:bg-gray-100"
    >
      <div>
        <span className="material-icons text-3xl text-blue-600">
          {" "}
          description{" "}
        </span>
      </div>
      <p className="w-10 flex-grow truncate pl-5 pr-10">{fileName}</p>
      <p className="pr-5 text-sm"> {date?.toDate().toLocaleDateString()} </p>
      <IconButton
        color="gray"
        variant="outlined"
        className="mt-1 hidden h-20 w-20 rounded-full border-0 md:inline-flex"
        children={<span className="material-icons"> more_vert </span>}
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      />
    </div>
  );
}

export default DocumentRow;
