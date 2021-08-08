import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProjectMenu({ id }) {
  const [projectMenu, setProjectMenu] = useState([
    {
      id: 1,
      link: `/admin/projects/${id}`,
      label: "Overview",
    },

    {
      id: 4,
      link: `/admin/projects/${id}/deliverables`,
      label: "Deliverables",
    },
    {
      id: 3,
      link: `/admin/projects/${id}/manage`,
      label: "Manage access",
    },
    {
      id: 2,
      link: `/admin/projects/${id}/actions`,
      label: "Actions",
    },
  ]);
  return (
    <div className="border border-gray-400 rounded-md p-2 text-sm ">
      <ul className="flex items-center space-x-2  ">
        {projectMenu.map((menu) => (
          <li
            key={menu.id}
            className="border-r border-gray-500 last:border-white pr-2"
          >
            <Link to={menu.link}>{menu.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectMenu;
