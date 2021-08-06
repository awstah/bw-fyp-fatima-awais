import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Field from "../../Ui/Field";
import { RiSearch2Line } from "react-icons/ri";
import db from "../../../firebase/firebase";
import EmployCard from "./EmployCard";

function AddEmploy({ click }) {
  const [search, setSearch] = useState("");

  const [employs, isloading, error] = useCollection(db.collection("Employs"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    <div className="w-full h-full bg-black bg-opacity-30 absolute flex items-center justify-center">
      <div className="bg-white p-5 flex flex-col space-y-4">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl my-2 font-bold leading-normal text-gray-800  z-50">
          New Employ
        </p>
        <div className="flex items-center space-x-3">
          <div className="w-full">
            <Field
              type="search"
              placeholder="Search employ..."
              Icon={RiSearch2Line}
              value={search}
              change={(e) => {
                setSearch(e.target.value);
              }}
            />
            <div className="w-96 h-96">
              <p>
                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {isloading && <span>Collection: Loading...</span>}
                {employs && (
                  <span>
                    {employs.docs
                      .filter((doc) => doc.data().email == search)
                      .map((filterDoc) => (
                        <React.Fragment key={filterDoc.id}>
                          <EmployCard
                            {...filterDoc.data()}
                            id={filterDoc.id}
                            click={click}
                          />
                        </React.Fragment>
                      ))}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end space-x-3 pt-6">
          <button className="btn-oultine " onClick={click}>
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmploy;
