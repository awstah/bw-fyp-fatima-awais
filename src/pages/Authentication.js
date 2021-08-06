import React, { useState } from "react";
import { GoProject } from "react-icons/go";
import Signin from "../components/Auth/Signin";
import Signup from "../components/Auth/Signup";
import signInImage from "../Assets/images/signin.png";
import signUpimg from "../Assets/images/signup.png";
function Authentication() {
  const [isLogin, setIsLogin] = useState(true);
  console.log(isLogin);

  return (
    <div className="h-screen flex justify-center">
      <div className="hidden lg:inline lg:w-4/6 xl:w-5/6">
        <div
          className="w-full h-full bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${isLogin ? signInImage : signUpimg})`,
          }}
        >
          <h2 className="text-xl  text-purple-600 font-bold flex items-center space-x-3 p-5">
            <GoProject className="text-3xl" />
            <span>Buzzinessware</span>
          </h2>
        </div>
      </div>
      <div className="w-full md:w-4/6 lg:w-2/6 xl:w-3/12 bg-white p-5">
        {isLogin ? <Signin /> : <Signup />}
        <div className="text-gray-600 text-xs flex items-center space-x-1 my-5">
          <p>
            {isLogin
              ? "You don't have an account? "
              : "Already have an Account?"}
          </p>
          <span
            className="text-purple-600 font-bold cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Signin"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
