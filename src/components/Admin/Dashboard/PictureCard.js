import React from "react";
import cardPicture from "../../../Assets/images/picturecard.jpeg";
function PictureCard() {
  return (
    <div className="w-full h-60 bg-white shadow-md rounded-lg p-2">
      <div
        className="w-full h-full object-contain bg-no-repeat bg-center rounded-md mix bg-black bg-blend-color bg-opacity-50"
        style={{ backgroundImage: `url(${cardPicture})` }}
      >
        <div className="py-10 w-2/3 px-5 ">
          <h2 className="text-white text-3xl font-semibold">
            Work with your teams
          </h2>
          <p className="text-white text-md font-medium">
            Grow your productivity easily with buzzinessware and can manage your
            employs also.
          </p>
          <button className="hidden md:inline-block self-start btn-secondary text-white hover:text-gray-100">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default PictureCard;
