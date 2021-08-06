import React from "react";
import { Link } from "react-router-dom";

function SidebarItems({ Icon, name, path }) {
  return (
    <Link to={`${path}`}>
      <span className="hover:bg-gray-100 w-full px-5 py-2 rounded-sm flex items-center space-x-4 text-gray-800 group cursor-pointer ">
        <Icon className="text-2xl group-hover:text-purple-600 focus:text-purple-800" />
        <h2 className="font-semibold">{name}</h2>
      </span>
    </Link>
  );
}

export default SidebarItems;
