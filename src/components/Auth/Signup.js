import React, { useState } from "react";
import { RiAtFill, RiUser5Fill, RiEyeCloseFill } from "react-icons/ri";
import Field from "../Ui/Field";
import db from "../../firebase/firebase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useAuth } from "../../app/AuthContext";
import { useHistory } from "react-router-dom";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();
  const history = useHistory();

  const submitAdminHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    signUp(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        db.collection("Users").doc(user.uid).set({
          name: name,
          email: user.email,
        });
        setLoading(false);
        history.push("/admin");
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };

  const submitEmployHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    signUp(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        db.collection("Employs").doc(user.uid).set({
          name: name,
          email: user.email,
        });
        setLoading(false);
        history.push("/employ");
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="">
      <div className="my-5 text-center">
        <h2 className="text-purple-600 font-bold text-2xl">Welcome!</h2>
        <p className="text-gray-400 font-semibold">
          Provide your information to Register
        </p>
      </div>
      <form
        onSubmit={isAdmin ? submitAdminHandler : submitEmployHandler}
        className="flex flex-col space-y-6"
      >
        <Field
          type="text"
          placeholder="Name"
          Icon={RiUser5Fill}
          value={name}
          change={(e) => {
            setName(e.target.value);
          }}
        />

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
        <div className="flex items-center space-x-3">
          <h3 className="font-bold text-gray-600 text-sm ">Account Type:</h3>
          <div className="flex items-center">
            <input
              type="radio"
              name="account_type"
              value={isAdmin}
              onClick={() => {
                setIsAdmin(true);
              }}
            />
            <label className="text-sm font-semibold ml-2">Admin</label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              name="account_type"
              value={isAdmin}
              onClick={() => {
                setIsAdmin(false);
              }}
            />
            <label className="text-sm font-semibold ml-2">Employ</label>
          </div>
        </div>

        <button
          type="submit"
          className="mx-auto btn-primary-block bg-gradient-to-l from-purple-800 to-purple-600 hover:to-purple-900 flex items-center space-x-2 justify-center"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="text-lg font-bold animate-spin" />
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
}

export default Signup;
