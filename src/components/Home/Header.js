import { GoProject } from "react-icons/go";
import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../app/AuthContext";

function Header() {
  const history = useHistory();
  const { currentUser } = useAuth();
  return (
    <div className="w-full h-16 flex items-center justify-between px-10 bg-transparent z-50">
      <div>
        <h2 className="text-xl  text-purple-600 font-bold flex items-center space-x-3">
          <GoProject className="text-3xl" />
          <span>Buzzinessware</span>
        </h2>
      </div>
      <div className="hidden md:inline-flex space-x-2">
        {!currentUser ? (
          <button
            className="bg-purple-600  hover:bg-purple-800 btn-primary"
            onClick={() => {
              history.push("/authentication");
            }}
          >
            Get Started
          </button>
        ) : (
          <button
            className="bg-purple-600  hover:bg-purple-800 btn-primary"
            onClick={() => {
              history.push("/admin");
            }}
          >
            Dashboard
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
