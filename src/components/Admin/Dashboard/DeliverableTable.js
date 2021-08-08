import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useAuth } from "../../../app/AuthContext";
import db from "../../../firebase/firebase";

function DeliverableTable(props) {
  const { currentUser } = useAuth();
  const deleteDeliverableHandler = () => {
    db.collection("Users")
      .doc(currentUser.uid)
      .collection("Projects")
      .doc(props.projId)
      .collection("Deliverables")
      .doc(props.id)
      .delete();
  };
  return (
    <React.Fragment>
      <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
        <td className="pl-4 cursor-pointer">
          <p className="text-sm font-medium leading-none text-gray-800 capitalize">
            {props.name}
          </p>
        </td>
        <td className="pl-12">
          <p className="text-sm font-medium leading-none text-gray-800 capitalize">
            {props.startDate}
          </p>
        </td>
        <td className="pl-12">
          <p className="font-medium ">{props.endDate}</p>
        </td>
        <td className="pl-20">
          <p className="font-medium capitalize">{props.status}</p>
        </td>
        <td className="pl-20">
          <p className="font-medium capitalize">{props.priority}</p>
        </td>
        <td className="pl-16">
          <div className="flex items-center">
            {/* <p className="font-medium capitalize">{props.status}</p> */}
          </div>
        </td>

        <td className="pl-16">
          <div className="flex items-center space-x-3">
            <button className="btn-outline">
              <AiFillEdit />
            </button>
            <button
              className="btn-primary bg-red-700 ring-red-800"
              onClick={deleteDeliverableHandler}
            >
              <AiFillDelete />
            </button>
          </div>
        </td>
      </tr>
      {/* <div className="">
        {show && <EditEmploy {...props} click={() => setShow(false)} />}
      </div> */}
    </React.Fragment>
  );
}

export default DeliverableTable;
