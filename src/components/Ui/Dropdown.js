import React, { useState } from "react";
import { MdFace } from "react-icons/md";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import DropDownItems from "./DropDownItems";
import { useAuth } from "../../app/AuthContext";
import { useHistory } from "react-router-dom";
const DropDown = () => {
  const [show, setShow] = useState(false);
  const { logOut } = useAuth();
  const history = useHistory();

  const onSignout = () => {
    logOut();
  };
  return (
    <div>
      <div
        className="flex items-center  text-gray-600 cursor-pointer relative hover:text-purple-800 group"
        onClick={() => {
          setShow(!show);
        }}
      >
        <MdFace className="text-2xl" />
        {show ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </div>

      {show && (
        <div className="w-28 h-auto visible absolute right-5 mt-3 opacity-100 shadow bg-white transform transition ease-in-out duration-300 rounded-md flex p-1 z-50">
          <ul className="w-full">
            <DropDownItems name="Profile" />
            <DropDownItems name="Setting" />
            <DropDownItems name="Signout" click={onSignout} />
          </ul>
        </div>
      )}
    </div>
  );
};
export default DropDown;
