import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BiBuildingHouse } from "react-icons/bi";

function DepartmentTable(props, setShow) {
  return (
    <React.Fragment>
      <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
        <td className="pl-4 cursor-pointer">
          <div className="flex items-center">
            <div className="relative text-4xl text-gray-400">
              <BiBuildingHouse />
            </div>
          </div>
        </td>
        <td className="pl-12">
          <p className="text-sm font-medium leading-none text-gray-800 capitalize">
            {props.department}
          </p>
        </td>
        <td className="pl-20">
          <p className="font-medium capitalize">{props.numberOfEmploys}</p>
        </td>

        <td className="pl-16">
          <div className="flex items-center space-x-3">
            <button className="btn-outline" onClick={() => setShow(true)}>
              <AiFillEdit />
            </button>
            <button className="btn-primary bg-red-700 ring-red-800">
              <AiFillDelete />
            </button>
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default DepartmentTable;
