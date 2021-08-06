import React from "react";
function DropDownItems({ name, click }) {
  return (
    <li
      onClick={click}
      className="focus:outline-none cursor-pointer z-50 text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 focus:bg-gray-200 px-3 font-normal"
    >
      {name}
    </li>
  );
}

export default DropDownItems;
