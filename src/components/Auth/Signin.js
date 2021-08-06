import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiAtFill, RiEyeCloseFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../app/AuthContext";
import db from "../../firebase/firebase";
import Field from "../Ui/Field";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    signIn(email, password)
      .then((userCredentials) => {
        const userId = userCredentials.user.uid;
        const employRef = db.collection("Users").doc(userId);
        employRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              history.push("/admin");
            } else {
              history.push("/employ");
            }
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };
  return (
    <div className="">
      <div className="my-5 text-center">
        <h2 className="text-purple-600 font-bold text-2xl">Welcome Back!</h2>
        <p className="text-gray-400 font-semibold">
          Enter your credentials to login
        </p>
      </div>
      <form
        className="flex flex-col items-center space-y-6"
        onSubmit={submitHandler}
      >
        <Field
          type="email"
          placeholder="Email"
          Icon={RiAtFill}
          value={email}
          change={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Field
          type="password"
          placeholder="Password"
          Icon={RiEyeCloseFill}
          value={password}
          change={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={submitHandler}
          className="btn-primary-block bg-gradient-to-l from-purple-800 to-purple-600 hover:to-purple-900 flex items-center justify-center space-x-2"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="text-lg font-bold animate-spin" />
          ) : (
            "Signin"
          )}
        </button>
      </form>
    </div>
  );
}

export default Signin;
