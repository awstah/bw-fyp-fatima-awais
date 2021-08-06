import { IoMdRocket } from "react-icons/io";
import React from "react";

function LargeCards() {
  return (
    <div className="w-full h-60 bg-white  shadow-md rounded-lg flex items-center">
      <div className="px-5 w-2/3 flex flex-col space-y-2">
        <h4 className="text-gray-600 font-bold">Manage your Projects</h4>
        <h2 className="text-4xl text-purple-600 font-bold">Welcome</h2>
        <p className="text-gray-600 font-medium">
          Explore the Buzzinessware to manage your projects easily and save
          time. Its develop for Software's companies
        </p>
      </div>
      <div className="w-2/6 p-10 bg-gradient-to-br from-pink-600 to-purple-600 text-white rounded-lg m-10">
        <IoMdRocket className="w-full h-auto" />
      </div>
    </div>
  );
}

export default LargeCards;
