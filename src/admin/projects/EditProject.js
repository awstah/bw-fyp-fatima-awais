import React, { useState } from "react";
import Layout from "../../components/Admin/Layout";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useAuth } from "../../app/AuthContext";
import db from "../../firebase/firebase";
import { useHistory } from "react-router-dom";
import ProjectManager from "../../components/Admin/Dashboard/ProjectManager";
import ComponentLoading from "../../components/Placeholder/ComponentLoading";
import { FiAlertTriangle } from "react-icons/fi";
function EditProject(props) {
  const [title, setTitle] = useState(props.title);
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);
  const [status, setStatus] = useState(props.status);
  const [editorState, setEditorState] = useState(props.description);
  const [manager, setManager] = useState(props.manager);
  const [model, setModel] = useState(false);
  const [deleteerror, setError] = useState(true);
  const [deleteInput, setDeleteInput] = useState("");

  const history = useHistory();
  const { currentUser } = useAuth();
  const [value, loading, error] = useCollection(
    db.collection("Users").doc(currentUser.uid).collection("MyEmploys"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (loading) {
    return <ComponentLoading />;
  }
  const updateProjectSubmitHandler = async (e) => {
    e.preventDefault();
    await db
      .collection("Users")
      .doc(currentUser.uid)
      .collection("Projects")
      .doc(props.id)
      .update({
        title: title,
        manager: manager,
        startDate: startDate,
        endDate: endDate,
        status: status,
        description: editorState,
      });
    history.push(`/admin/projects/${props.id}`);
  };

  const deleteProjectHandler = async (e) => {
    e.preventDefault();
    if (deleteInput == props.title) {
      await db
        .collection("Users")
        .doc(currentUser.uid)
        .collection("Projects")
        .doc(props.id)
        .delete();
      history.push("/admin/projects");
    }
  };

  return (
    <div>
      <div className="">
        {model && (
          <div className="flex justify-center w-full">
            <div className="bg-white shadow-md absolute w-1/3 h-auto flex flex-col">
              <header className="bg-red-100 text-red-700 p-5 font-normal text-xl flex items-center space-x-4 h-12">
                <span>
                  <FiAlertTriangle />
                </span>{" "}
                <p>Doing so will permanently delete the data at this.</p>
              </header>
              <p className="text-gray-600 font-bold text-sm p-5">
                You want to delete {props.title} ? then type{" "}
                <srong>{props.title}</srong>
              </p>
              <p className="bg-red-100 text-red-700 font-sm  w-1/2 mx-5">
                {deleteerror && "Not matched"}
              </p>
              <div className="w-4/5 p-5">
                <input
                  value={deleteInput}
                  onChange={(e) => {
                    e.preventDefault();
                    setDeleteInput(e.target.value);
                    if (props.title == e.target.value) {
                      setError(false);
                    } else {
                      true;
                    }
                  }}
                  placeholder={props.title}
                  type="text"
                  required
                  className="bg-gray-50 px-2 border border-gray-600 rounded-sm"
                />
              </div>
              <footer className="flex justify-end space-x-4 p-3">
                <button
                  disabled={!deleteInput}
                  onClick={deleteProjectHandler}
                  className="btn-primary bg-red-600 ring-red-800"
                >
                  Delete
                </button>
                <button onClick={() => setModel(false)} className="btn-outline">
                  Dismiss
                </button>
              </footer>
            </div>
          </div>
        )}
        <div className="bg-white py-5 mt-3 rounded-md">
          <form className="flex flex-col space-y-4">
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
                  defaultValue={props.status}
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
                  <option value="overdue">Overdue</option>
                </select>
              </div>
              <div className="inputdiv">
                <label className="whitespace-nowrap font-semibold">
                  Manager:
                </label>
                <select
                  name="Manager"
                  defaultValue={props.manager}
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
                          <option
                            value={props.id || filterDoc.uid}
                            className="capitalize"
                          >
                            {filterDoc.data().name}
                          </option>
                        ))}
                    </React.Fragment>
                  )}
                </select>
              </div>
            </div>
            <div className="bg-gray-50 rounded-sm p-4">
              <textarea
                rows={12}
                className="inputfield"
                value={editorState}
                placeholder="Project Description"
                onChange={(e) => setEditorState(e.target.value)}
              ></textarea>
            </div>
          </form>
          <div className="flex justify-end space-x-4 mt-10">
            <button
              onClick={() => {
                setModel(true);
              }}
              className="btn-primary bg-red-600 ring-red-800"
            >
              Delete
            </button>
            <button
              onClick={updateProjectSubmitHandler}
              className="btn-primary bg-purple-600 ring-purple-800"
            >
              Update project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProject;
