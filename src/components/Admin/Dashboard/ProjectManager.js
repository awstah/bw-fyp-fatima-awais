import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import db from "../../../firebase/firebase";

function ProjectManager({ id }) {
  const [manager, managerLoading, managerError] = useDocument(
    db.doc(`Employs/${id}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (managerLoading) {
    return <h2 className="bg-gray-100 animate-pulse w-36 h-8"></h2>;
  }
  return (
    <div className="bg-gray-50 p-5 my-5 w-1/3">
      <h2 className="text-sm text-gray-700 font-bold">
        Project Manager:{" "}
        <span className="capitalize">{manager.data().name}</span>
      </h2>
      <h3 className="text-sm text-gray-700 font-medium ">
        Email: <span className="">{manager.data().email}</span>
      </h3>
    </div>
  );
}

export default ProjectManager;
