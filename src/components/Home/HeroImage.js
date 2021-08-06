import React from "react";
import HeroImg from "../../Assets/images/heropic1.png";
import HeroImg1 from "../../Assets/images/heropic2.png";
function HeroImage() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="transform animate-pulse ease-linear">
        <img src={HeroImg} className="w-full h-full object-cover" />
      </div>

      <div className="absolute">
        <img src={HeroImg1} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default HeroImage;
