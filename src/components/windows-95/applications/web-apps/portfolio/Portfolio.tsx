import { useState } from "react";
import Body from "./Body";
import Header from "./Header";

function Portfolio() {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <div className="flex h-full w-full flex-col items-center justify-start overflow-auto bg-gray-800 pb-4">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Body currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
}

export default Portfolio;
