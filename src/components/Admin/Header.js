import React from "react";
import { GoProject } from "react-icons/go";
import Field from "../Ui/Field";
import { BiSearch } from "react-icons/bi";
import DropDown from "../Ui/Dropdown";

function Header() {
  return (
    <div className="w-full h-12 bg-white z-50 flex items-center justify-between px-10">
      <div>
        <h2 className="text-xl   font-bold flex items-center space-x-3">
          <GoProject className="text-3xl" />
          <span>Buzzinessware</span>
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
  );
}

export default Header;
