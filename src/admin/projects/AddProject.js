import React, { useState } from "react";
import Layout from "../../components/Admin/Layout";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuth } from "../../app/AuthContext";
import db from "../../firebase/firebase";
import TextEditor from "../../components/Admin/Dashboard/TextEditor";
import { convertToRaw, EditorState } from "draft-js";
import { useHistory } from "react-router-dom";

function AddProject() {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [manager, setManager] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const history = useHistory();
  const { currentUser } = useAuth();
  const [value, loading, error] = useCollection(
    db.collection("Users").doc(currentUser.uid).collection("MyEmploys"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const projectSubmitHandler = async (e) => {
    e.preventDefault();
    await db
      .collection("Users")
      .doc(currentUser.uid)
      .collection("Projects")
      .doc()
      .set(
        {
          title: title,
          manager: manager,
          startDate: startDate,
          endDate: endDate,
          status: status,
          description: convertToRaw(editorState.getCurrentContent()),
        },
        {
          merge: true,
        }
      );
    history.replace("/admin/projects");
  };
  return (
    <Layout>
      <div className="">
        <div className="flex items-center space-x-5">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Add Projects
          </p>
        </div>
        <div className="bg-white p-5 mt-3 rounded-md">
          <form
            className="flex flex-col space-y-4"
            onSubmit={projectSubmitHandler}
          >
            <div className="inputdiv">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Project"
                type="text"
                className="inputfield text-xl"
              />
            </div>
            <div className="flex space-x-3">
              <div className="inputdiv">
                <label className="whitespace-nowrap font-semibold">
                  Start Date:
                </label>
                <input
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="Project"
                  type="date"
                  className="inputfield"
                />
              </div>
              <div className="inputdiv">
                <label className="whitespace-nowrap font-semibold">
                  End Date:
                </label>
                <input
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  placeholder="Project"
                  type="date"
                  className="inputfield"
                />
              </div>

              <div className="inputdiv">
                <label className="whitespace-nowrap font-semibold">
                  Status:
                </label>
                <select
                  name="Status"
                  className=""
                  id="status"
                  className="inputfield"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option disabled selected>
                    Status
                  </option>
                  <option value="pending">Pending</option>
                  <option value="in-process">In Process</option>
                  <option value="review">Review</option>
                  <option value="debug">Debug</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="inputdiv">
                <label className="whitespace-nowrap font-semibold">
                  Manager:
                </label>
                <select
                  name="Manager"
                  id="manager"
                  className="inputfield"
                  onChange={(e) => setManager(e.target.value)}
                >
                  <option disabled selected>
                    Manager
                  </option>
                  {value && (
                    <React.Fragment>
                      Collection:{" "}
                      {value.docs
                        .filter((doc) => doc.data().designation == "manager")
                        .map((filterDoc) => (
                          <option value={filterDoc.id} className="capitalize">
                            {filterDoc.data().name}
                          </option>
                        ))}
                    </React.Fragment>
                  )}
                </select>
              </div>
            </div>
            <div className="mt-3">
              <TextEditor
                editorState={editorState}
                onEditorStateChanged={(editorState) =>
                  setEditorState(editorState)
                }
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn-primary bg-purple-600 ring-purple-800"
              >
                Create project
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default AddProject;
