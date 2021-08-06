import { useState } from "react";
import { BsBellFill } from "react-icons/bs";

function Notification() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className="flex items-center text-gray-600 cursor-pointer relative"
        onClick={() => {
          setShow(!show);
        }}
      >
        <BsBellFill className="text-lg transform hover:animate-bounce hover:text-gray-700" />
      </div>

      {show && (
        <div className="w-52 h-32 visible absolute right-24 mt-3 opacity-100 shadow bg-white transform transition ease-in-out duration-300 rounded-md flex p-1">
          <ul className="w-full">
            <li>Get started</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Notification;
