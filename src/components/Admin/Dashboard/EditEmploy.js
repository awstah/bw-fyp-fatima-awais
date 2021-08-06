import React, { useState } from "react";
import { useAuth } from "../../../app/AuthContext";
import db from "../../../firebase/firebase";

function EditEmploy({ id, designation, status, joinDate, click, name }) {
  const [newdesignation, setDesignation] = useState(designation);
  const [newstatus, setStatus] = useState(status);
  const [newjoindate, setJoinDate] = useState(joinDate);
  const { currentUser } = useAuth();

  const employUpdateHandler = () => {
    db.collection("Users")
      .doc(currentUser.uid)
      .collection("MyEmploys")
      .doc(id)
      .update({
        designation: newdesignation,
        status: newstatus,
        joinDate: newjoindate,
      })
      .then(() => {
        click();
      });
  };
  return (
    <div className="flex justify-center py-8 px-4 w-full  absolute right-0">
      <div className="md:w-4/6 rounded shadow-lg p-6  dark:bg-gray-800 bg-white">
        <h1 className="text-gray-600 font-bold text-lg">Edit Employs</h1>
        <p className="capitalize font-semibold text-gray-600 text-sm">
          Employ Name: <span className="text-gray-500">{name}</span>
        </p>

        <main className="my-3">
          <div className="grid grid-cols-3">
            <div>
              <select
                name="Designation"
                id="designation"
                value={newdesignation}
                className="bg-gray px-3 py-2 outline-none"
                onChange={(e) => setDesignation(e.target.value)}
              >
                <option disabled>Designation</option>
                <option value="manager">Manager</option>
                <option value="designer">Designer</option>
                <option value="developer">Develper</option>
                <option value="tester">Tester</option>
              </select>
            </div>

            <div>
              <select
                name="Status"
                id="status"
                value={newstatus}
                className="bg-gray px-3 py-2 outline-none"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option disabled>Status</option>
                <option value="working">Working</option>
                <option value="leaves">Leaves</option>
                <option value="resigned">Resigned</option>
              </select>
            </div>

            <div>
              <input
                type="date"
                className="bg-gray px-3 py-2 outline-none"
                value={newjoindate}
                onChange={(e) => setJoinDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex space-x-5 mt-4 items-center">
            <button
              onClick={employUpdateHandler}
              className="btn-primary bg-indigo-600 ring-indigo-800"
            >
              Save
            </button>
            <button className="btn-outline" onClick={click}>
              Dismiss
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EditEmploy;
