import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../app/AuthContext";
import notFound from "../Assets/images/notfound.svg";

function PageNotFound() {
  const { userData } = useAuth();
  console.log(userData);
  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-center p-10 flex justify-center items-end"
      style={{
        backgroundImage: `url(${notFound})`,
      }}
    >
      <div className="flex space-x-3 items-center">
        <Link className="btn-primary bg-purple-700 ring-purple-800" to="/">
          Home
        </Link>
        <Link className="btn-outline">Contact</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
