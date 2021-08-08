import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuth } from "../../app/AuthContext";
import AddDepartment from "../../components/Admin/Dashboard/AddDepartment";
import DepartmentTable from "../../components/Admin/Dashboard/DepartmentTable";
import Layout from "../../components/Admin/Layout";
import ComponentLoading from "../../components/Placeholder/ComponentLoading";
import db from "../../firebase/firebase";

function Departments() {
  const [model, setModel] = useState(false);
  const { currentUser } = useAuth();
  const [departments, loading, error] = useCollection(
    db.collection("Users").doc(currentUser.uid).collection("Departments"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <Layout>
      <div className="relative">
        <div>{loading && <ComponentLoading />}</div>

        <div className="">
          {model ? (
            <AddDepartment
              click={() => {
                setModel(false);
              }}
            />
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="sm:px-6">
            <div className="px-4 md:px-10 py-4 md:py-7 rounded-tl-lg rounded-tr-lg">
              <div className="sm:flex items-center justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                  Departments
                </p>
                <div>
                  <button
                    onClick={() => setModel(true)}
                    className="btn-primary bg-purple-600 ring-purple-800"
                  >
                    Add Department
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr className="h-16 w-full text-sm leading-none text-gray-800">
                    <th className="font-normal text-left pl-4"></th>
                    <th className="font-normal text-left pl-12">Department</th>
                    <th className="font-normal text-left pl-12">
                      Number Of Employs
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {loading && <ComponentLoading />}

                  {error && <p>error</p>}
                  {departments && (
                    <React.Fragment>
                      {departments.docs.map((doc) => (
                        <DepartmentTable {...doc.data()} id={doc.id} />
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

export default Departments;
