import React from "react";

import {
  RiDashboardLine,
  RiBuilding2Line,
  RiChatSmile3Line,
  RiUser6Line,
} from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import SidebarItems from "../Ui/SidebarItems";

function Sidebar() {
  return (
    <div className="hidden md:inline-flex md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 bg-white min-h-screen py-10 flex-col space-y-3">
      <SidebarItems Icon={RiDashboardLine} name="Dashboard" path="/admin" />
      <SidebarItems
        Icon={AiOutlineProject}
        name="Projects"
        path={`/admin/projects`}
      />
      <SidebarItems Icon={FiUsers} name="Employs" path="/admin/employs" />
      <SidebarItems
        Icon={RiBuilding2Line}
        name="Departments"
        path="/admin/Departments"
      />
      <SidebarItems Icon={RiChatSmile3Line} name="Chats" path="/chat" />
      <SidebarItems Icon={RiUser6Line} name="Profile" path="/profile" />
      <SidebarItems Icon={BsGear} name="Setting" path="/setting" />
    </div>
  );
}

export default Sidebar;
