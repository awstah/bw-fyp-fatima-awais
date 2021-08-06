import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function ComponentLoading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <AiOutlineLoading3Quarters className="text-gray-500 text-3xl animate-spin" />
    </div>
  );
}

export default ComponentLoading;
