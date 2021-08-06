import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../app/AuthContext";

function ProtectedRoutes({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/authentication" />
        );
      }}
    ></Route>
  );
}

export default ProtectedRoutes;