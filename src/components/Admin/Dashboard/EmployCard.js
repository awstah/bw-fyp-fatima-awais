import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useAuth } from "../../../app/AuthContext";
import { useStateValue } from "../../../app/StateProvider";
import db from "../../../firebase/firebase";

function EmployCard({ name, email, id, click }) {
  const [newdesignation, setDesignation] = useState("");
  const [newstatus, setStatus] = useState("");
  const [newjoindate, setJoinDate] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuth();
  const addEmployHandler = async (e) => {
    e.preventDefault();
    await db
      .collection("Users")
      .doc(currentUser.uid)
      .collection("MyEmploys")
      .doc(id)
      .set({
        name: name,
        email: email,
        status: newstatus,
        designation: newdesignation,
        joinDate: newjoindate,
      });

    click();
  };

  return (
    <div className="">
      {/* Code block starts */}
      <div className="dark:bg-gray-800 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 ">
        <div className="flex items-center mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
          <div className="relative w-12 h-12 rounded">
            <img
              className="w-full h-full object-cover inset-0 absolute rounded"
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/card_headings/ch_1.png"
              alt="avatar"
            />
          </div>
          <div className="ml-2">
            <h2 className="text-gray-800 dark:text-gray-100 text-sm font-bold capitalize">
              {name}
            </h2>
            <p className="font-normal text-xs text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-700">
              {email}
            </p>
          </div>
        </div>
      </div>
      {/* Code block ends */}
      <form onSubmit={addEmployHandler}>
        <div className="flex flex-col justify-center space-y-3 mt-5">
          <div>
            <select
              name="Designation"
              id="designation"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option disabled selected>
                Designation
              </option>
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
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option disabled selected>
                Status
              </option>
              <option value="working">Working</option>
              <option value="leaves">Leaves</option>
              <option value="resigned">Resigned</option>
            </select>
          </div>

          <div>
            <input
              type="date"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={newjoindate}
              onChange={(e) => setJoinDate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn-primary bg-gradient-to-l from-purple-800 to-purple-600 hover:to-purple-900 flex items-center space-x-2 my-5 justify-center"
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="text-lg font-bold animate-spin" />
            ) : (
              "New Employ"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployCard;
