import { useState } from "react";
import Body from "./Body";
import Header from "./Header";

function Portfolio() {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <div className="mb-4 flex size-full flex-1 shrink-0 flex-col items-center justify-start overflow-y-auto bg-gray-800">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Body currentTab={currentTab} />
    </div>
  );
}

export default Portfolio;
