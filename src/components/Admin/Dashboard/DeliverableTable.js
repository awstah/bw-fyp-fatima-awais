import React, { useState } from "react";
import { AiFillDelete, AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import AddDeliverable from "../../../admin/deliverables/AddDeliverable";
import { useAuth } from "../../../app/AuthContext";
import db from "../../../firebase/firebase";

function DeliverableTable(props) {
  const [Editdeliverable, setEditDeliverable] = useState(false);
  const [deliverable, setDeliverable] = useState(props);
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

  if (Editdeliverable === true) {
    return (
      <div className="bg-white shadow-md absolute p-10 flex items-center justify-center z-50">
        <AddDeliverable
          setEditDeliverable={setEditDeliverable}
          deliverable={deliverable}
        />
      </div>
    );
  }

  const modelOpen = (e) => {
    e.preventDefault();
    setEditDeliverable(true);
  };
  return (
    <React.Fragment>
      <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100 z-30">
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
            <button className="btn-primary flex items-center bg-yellow-400 ring-yellow-500">
              <AiOutlinePlus />
              <span>Task</span>
            </button>
            <button className="btn-outline" onClick={modelOpen}>
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
    </React.Fragment>
  );
}

export default DeliverableTable;
