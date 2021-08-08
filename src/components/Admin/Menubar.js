import React, { useState } from "react";
import {
  RiDashboardLine,
  RiBuilding2Line,
  RiChatSmile3Line,
  RiUser6Line,
} from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { Link } from "react-router-dom";

function Menubar() {
  const [menus, setMenus] = useState([
    {
      id: 1,
      Icon: RiDashboardLine,
      label: "Dashboard",
      link: "/admin",
    },
    {
      id: 2,

      Icon: AiOutlineProject,
      label: "Projects",
      link: "/admin/projects",
    },
    {
      id: 3,

      Icon: RiBuilding2Line,
      label: "Departments",
      link: "/admin/Departments",
    },
    {
      id: 6,

      Icon: FiUsers,
      label: "Employs",
      link: "/admin/employs",
    },
    {
      id: 4,

      Icon: RiUser6Line,
      label: "Profile",
      link: "/admin",
    },

    {
      id: 5,

      Icon: BsGear,
      label: "Settings",
      link: "/setting",
    },
  ]);
  return (
    <div className="w-full h-12 flex items-center bg-gray-700 z-30 sticky top-0">
      <div className="w-full px-10 xl:px-0 xl:w-4/5 xl:mx-auto flex items-center">
        <ul className="flex items-center space-x-4">
          {menus.map((menu) => (
            <li key={menu.id}>
              <Link to={`${menu.link}`}>
                <span className="w-full flex items-center space-x-2 text-white cursor-pointer group hover:bg-gray-100 focus:shadow-sm rounded-md focus:bg-gray-100 h-8 px-2">
                  <menu.Icon className="text-md group-hover:text-gray-700 focus:text-gray-700" />
                  <h2 className="font-semibold text-sm tracking-widest group-hover:text-gray-700 focus:text-gray-700">
                    {menu.label}
                  </h2>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menubar;
