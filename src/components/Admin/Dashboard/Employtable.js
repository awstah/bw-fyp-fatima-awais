import React, { useState } from "react";
import db from "../../../firebase/firebase";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import EditEmploy from "./EditEmploy";
import { useAuth } from "../../../app/AuthContext";

function Employtable(props) {
  const [show, setShow] = useState(false);
  const { currentUser } = useAuth();

  const deleteEmployHandler = async () => {
    await db
      .collection("Users")
      .doc(currentUser.uid)
      .collection("MyEmploys")
      .doc(props.id)
      .delete();
  };

  return (
    <React.Fragment>
      <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
        <td className="pl-4 cursor-pointer">
          <div className="flex items-center">
            <div className="relative w-12 h-12 rounded">
              <img
                className="w-full h-full object-cover inset-0 absolute rounded"
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/card_headings/ch_1.png"
                alt="avatar"
              />
            </div>
          </div>
        </td>
        <td className="pl-12">
          <p className="text-sm font-medium leading-none text-gray-800 capitalize">
            {props.name}
          </p>
        </td>
        <td className="pl-12">
          <p className="font-medium ">{props.email}</p>
        </td>
        <td className="pl-20">
          <p className="font-medium capitalize">{props.designation}</p>
        </td>
        <td className="pl-20">
          <p className="font-medium capitalize">{props.joinDate}</p>
        </td>
        <td className="pl-16">
          <div className="flex items-center">
            <p className="font-medium capitalize">{props.status}</p>
          </div>
        </td>

        <td className="pl-16">
          <div className="flex items-center space-x-3">
            <button className="btn-outline" onClick={() => setShow(true)}>
              <AiFillEdit />
            </button>
            <button
              onClick={deleteEmployHandler}
              className="btn-primary bg-red-700 ring-red-800"
            >
              <AiFillDelete />
            </button>
          </div>
        </td>
      </tr>
      <div className="">
        {show && <EditEmploy {...props} click={() => setShow(false)} />}
      </div>
    </React.Fragment>
  );
}

export default Employtable;
