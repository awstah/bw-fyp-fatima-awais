import React from "react";
import Header from "./Header";
import Menubar from "./Menubar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Menubar />
      <div className="flex">
        {/* <Sidebar /> */}
        <div className="w-full px-10 xl:px-0 xl:w-4/5 xl:mx-auto my-5">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
