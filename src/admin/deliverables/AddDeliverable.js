import React, { useState } from "react";
import { useAuth } from "../../app/AuthContext";
import db from "../../firebase/firebase";

function AddDeliverable({ setDeliverable, id }) {
  const [name, setname] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const { currentUser } = useAuth();

  const deliverableSubmitHandler = async (e) => {
    e.preventDefault();
    await db
      .collection("Users")
      .doc(currentUser.uid)
      .collection("Projects")
      .doc(id)
      .collection("Deliverables")
      .doc()
      .set({
        name: name,
        startDate: startDate,
        endDate: endDate,
        status: status,
        priority: priority,
      });
    setDeliverable(false);
  };

  return (
    <div className="mt-5">
      <form
        className="flex flex-col space-y-4"
        onSubmit={deliverableSubmitHandler}
      >
        <div className="inputdiv">
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Deliverable"
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
              placeholder="Deliverable"
              type="date"
              className="inputfield"
            />
          </div>
          <div className="inputdiv">
            <label className="whitespace-nowrap font-semibold">End Date:</label>
            <input
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="Project"
              type="date"
              className="inputfield"
            />
          </div>

          <div className="inputdiv">
            <label className="whitespace-nowrap font-semibold">Status:</label>
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
              <option value="overdue">Overdue</option>
            </select>
          </div>

          <div className="inputdiv">
            <label className="whitespace-nowrap font-semibold">Priority:</label>
            <select
              name="Priority"
              className=""
              id="Priority"
              className="inputfield"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option disabled selected>
                Priority
              </option>
              <option value="high">High</option>
              <option value="Medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-5">
          <button onClick={() => setDeliverable(false)} className="btn-outline">
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary bg-purple-600 ring-purple-800"
          >
            Create deliverable
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDeliverable;
