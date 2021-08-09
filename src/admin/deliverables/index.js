import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AddDeliverable from "./AddDeliverable";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuth } from "../../app/AuthContext";
import db from "../../firebase/firebase";
import DeliverableTable from "../../components/Admin/Dashboard/DeliverableTable";
import ComponentLoading from "../../components/Placeholder/ComponentLoading";

function Deliverables(props) {
  const history = useHistory();
  const [addDeliverable, setDeliverable] = useState(false);
  const { currentUser } = useAuth();
  const [value, loading, error] = useCollection(
    db
      .collection("Users")
      .doc(currentUser.uid)
      .collection("Projects")
      .doc(props.id)
      .collection("Deliverables"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (addDeliverable) {
    return <AddDeliverable id={props.id} setDeliverable={setDeliverable} />;
  }
  return (
    <div>
      <div>{loading && <ComponentLoading />}</div>
      <div className="flex my-4 items-center justify-between border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-5">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wide leading-normal text-gray-600">
            Deliverables
          </p>
        </div>
        <div className="w-1/2 text-right">
          <button
            onClick={() => {
              setDeliverable(true);
            }}
            className="btn-primary bg-purple-600 ring-purple-800"
          >
            Add Deliverable
          </button>
        </div>
      </div>
      <table className="w-full whitespace-nowrap">
        <thead>
          <tr className="h-16 w-full text-sm leading-none text-gray-800">
            <th className="font-normal text-left pl-4">Deliverables</th>
            <th className="font-normal text-left pl-12">Start Date</th>
            <th className="font-normal text-left pl-12">End Date</th>
            <th className="font-normal text-left pl-20">Status</th>
            <th className="font-normal text-left pl-20">Priority</th>
            <th className="font-normal text-left pl-16"></th>
          </tr>
        </thead>
        <tbody className="w-full relative">
          {value && (
            <React.Fragment>
              {value.docs.map((doc) => (
                <DeliverableTable
                  {...doc.data()}
                  id={doc.id}
                  projId={props.id}
                />
              ))}
            </React.Fragment>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Deliverables;
