import React from "react";
import { GoProject } from "react-icons/go";
import Field from "../Ui/Field";
import { BiSearch } from "react-icons/bi";
import DropDown from "../Ui/Dropdown";

function Header() {
  return (
    <div className="w-full h-12 flex items-center bg-gray-700 text-gray-100 z-20">
      <div className="w-full px-10 xl:px-0 xl:w-4/5 xl:mx-auto flex items-center justify-between">
        <div className="">
          <h2 className="text-xl font-bold flex items-center space-x-3">
            <GoProject className="text-3xl" />
            <span className="tracking-wide">Buzzinessware</span>
          </h2>
        </div>
        <div className="w-1/3">
          <Field type="text" placeholder="Search.." Icon={BiSearch} />
        </div>
        <div className="flex items-center space-x-4">
          {/* <Notification /> */}
          <DropDown />
        </div>
      </div>
    </div>
  );
}

export default Header;
