import React from "react";
import logo from "../images/db-asterisk-logo-white.svg";

const Sidebar = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-blue-800 border-r border-blue-800">
        <div className="py-4 px-6">
          <img className="w-full" width="100" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
