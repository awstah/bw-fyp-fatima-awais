import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="px-5 py-3 w-full h-auto">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
