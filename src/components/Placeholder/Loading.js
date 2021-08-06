import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GoProject } from "react-icons/go";

function Loading() {
  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center space-y-3">
        <h2 className="text-xl text-gray-800 font-bold flex items-center space-x-3">
          <GoProject className="text-3xl" />
          <span>Buzzinessware</span>
        </h2>
        <p className="whitespace-nowrap text-sm text-gray-400 flex items-center">
          kindly wait we setup everything for you
          <span>
            <AiOutlineLoading3Quarters className="text-gray-500 animate-spin" />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Loading;
