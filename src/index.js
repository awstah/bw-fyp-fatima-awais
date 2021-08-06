import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./app/StateProvider";
import reducer, { initialState } from "./app/reducer";

import "./style/index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
);
