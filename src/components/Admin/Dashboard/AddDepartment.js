import React, { useState } from "react";
import Field from "../../Ui/Field";
import { RiBuilding4Fill } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { useStateValue } from "../../../app/StateProvider";
import db from "../../../firebase/firebase";
import { useAuth } from "../../../app/AuthContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function AddDepartment({ click }) {
  const [name, setName] = useState("");
  const [noOfEmploy, setNumOfEmploy] = useState("");
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const submitDepartmentHandler = async (e) => {
    e.preventDefault();
    await db
      .collection("Users")
      .doc(currentUser.uid)
      .collection("Departments")
      .doc()
      .set({
        department: name,
        numberOfEmploys: noOfEmploy,
      });
    setLoading(false);
    click();
  };
  return (
    <div className="w-full h-full bg-black bg-opacity-30 absolute flex items-center justify-center">
      <div className="bg-white p-5 flex flex-col space-y-4">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl my-2 font-bold leading-normal text-gray-800  z-50">
          New Department
        </p>
        <form className="" onSubmit={submitDepartmentHandler}>
          <div className="flex items-center space-x-3">
            <Field
              type="text"
              placeholder="Department Name"
              Icon={RiBuilding4Fill}
              value={name}
              change={(e) => {
                setName(e.target.value);
              }}
            />
            <div className="inputdiv">
              <ImUsers />
              <input
                className="inputfield"
                type="number"
                required
                min={0}
                placeholder="Number of Employs"
                value={noOfEmploy}
                onChange={(e) => {
                  setNumOfEmploy(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="w-full flex justify-end space-x-3 pt-6">
            <button type="submit" className="btn-oultine " onClick={click}>
              Dismiss
            </button>
            <button
              type="submit"
              className="btn-primary bg-gradient-to-l from-purple-800 to-purple-600 hover:to-purple-900 flex items-center space-x-2 justify-center"
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="text-lg font-bold animate-spin" />
              ) : (
                "New Department"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDepartment;
