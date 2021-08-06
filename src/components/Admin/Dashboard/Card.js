import React from "react";
function Card({ name, total, Icon }) {
  return (
    <div className="bg-white shadow-sm rounded-md w-full h-20 flex justify-between items-center px-10">
      <div className="">
        <h2 className="text-xl font-medium ">{name}</h2>
        <p className="text-sm text-gray-400 ">{total}</p>
      </div>
      <div
        className={`bg-gradient-to-bl from-pink-600 to-purple-600 rounded-md shadow-lg text-white text-3xl p-2`}
      >
        <Icon />
      </div>
    </div>
  );
}

export default Card;
