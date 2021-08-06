import React, { useState } from "react";
import { useAuth } from "../../app/AuthContext";
import { useCollection } from "react-firebase-hooks/firestore";
import db from "../../firebase/firebase";
import Layout from "../../components/Admin/Layout";
import AddEmploy from "../../components/Admin/Dashboard/AddEmploy";
import Employtable from "../../components/Admin/Dashboard/Employtable";
import ComponentLoading from "../../components/Placeholder/ComponentLoading";

function Employs() {
  const [model, setModel] = useState(false);
  const { currentUser } = useAuth();

  const [value, loading, error] = useCollection(
    db.collection("Users").doc(currentUser.uid).collection("MyEmploys"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <Layout>
      <div className="relative w-full h-full">
        <div className="">
          {model ? (
            <AddEmploy
              click={() => {
                setModel(false);
              }}
            />
          ) : (
            ""
          )}
        </div>

        <div>
          <div className="w-full sm:px-6">
            <div className="px-4 md:px-10 py-4 md:py-7 rounded-tl-lg rounded-tr-lg">
              <div className="sm:flex items-center justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                  Employs
                </p>
                <div>
                  <button
                    onClick={() => setModel(true)}
                    className="btn-primary bg-purple-600 ring-purple-800"
                  >
                    Add Employ
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr className="h-16 w-full text-sm leading-none text-gray-800">
                    <th className="font-normal text-left pl-4"></th>
                    <th className="font-normal text-left pl-12">Name</th>
                    <th className="font-normal text-left pl-12">Email</th>
                    <th className="font-normal text-left pl-20">Designation</th>
                    <th className="font-normal text-left pl-20">Join Date</th>
                    <th className="font-normal text-left pl-16">Status</th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {loading && <ComponentLoading />}

                  {error && <p>error</p>}
                  {value && (
                    <React.Fragment>
                      {value.docs.map((doc) => (
                        <Employtable {...doc.data()} id={doc.id} />
                      ))}
                    </React.Fragment>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Employs;
