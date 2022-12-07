import { QuerySnapshot, DocumentData } from "firebase/firestore";
import DocumentRow from "./common/DocumentRow";

interface Props {
  snapshot: QuerySnapshot<DocumentData> | undefined;
}

function DocList({ snapshot }: Props) {
  return (
    <section className="mx-auto max-w-3xl bg-white py-8 px-10 md:px-0">
      <div className="flex items-center justify-between text-sm text-gray-700">
        <h2 className="font-medium">My Documents</h2>
        <div className="flex items-center space-x-4">
          <p>Date Created</p>
          <span className="material-icons"> folder </span>
        </div>
      </div>

      {snapshot?.docs.map((doc) => (
        <DocumentRow
          key={doc.id}
          id={doc.id}
          fileName={doc.data().fileName}
          date={doc.data().timestamp}
        />
      ))}
    </section>
  );
}

export default DocList;
