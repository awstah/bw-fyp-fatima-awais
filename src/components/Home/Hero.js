import React from "react";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <div
      className="pt-24 flex flex-col md:flex-row md:justify-between space-y-10 px-10 md:px-32"
      style={{ backgroundImage: `url("/images/bg-2.png")` }}
    >
      <div className="w-full md:w-2/3 flex flex-col justify-center  space-y-5 ">
        <h2 className="text-3xl md:text-5xl md:w-2/3 font-bold text-purple-900 leading-normal">
          Manage your{" "}
          <span className="text-purple-600 animate-pulse">Project</span> with
          Buzzinessware
        </h2>
        <p className="text-xl text-gray-400 font-semibold">
          Stop using other tools start using Buzzinessware
        </p>
        <button className="hidden md:inline-block self-start btn-secondary text-purple-600 hover:text-purple-800">
          Read more
        </button>
        <div className="flex md:hidden space-x-2 self-center">
          <button className="bg-purple-600 text-white px-3 py-2 rounded-md hover:bg-purple-800 hover:shadow-md focus:ring-2 ring-offset-2 ring-purple-800">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <HeroImage />
      </div>
    </div>
  );
}

export default Hero;
