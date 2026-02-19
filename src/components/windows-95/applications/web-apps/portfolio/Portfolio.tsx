import React from "react";
import SideBar from "./SideBar";
import Main from "./Main";

function Portfolio() {
  return (
    <div className="relative flex size-full items-start gap-x-3 overflow-y-auto p-1">
      <SideBar />
      <Main />
    </div>
  );
}

export default Portfolio;
