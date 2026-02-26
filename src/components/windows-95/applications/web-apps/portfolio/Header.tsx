import { cn } from "@/lib/utils";
import React from "react";

const navItems = ["Home", "Skills", "Projects", "Contact"];

function Header({
  currentTab,
  setCurrentTab,
}: {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleTabClick = (tab: string) => {
    setCurrentTab(tab.toLowerCase());
  };

  return (
    <section className="w-full shrink-0">
      <div className="text-yellow bg-linear-to-b from-[#195ff8] to-[#180083] py-4 text-center">
        <h1
          className="text-5xl font-bold tracking-widest uppercase"
          style={{
            textShadow:
              "1px 1px 0 #ffffff, 2px 2px 0 #c0c0c0, 3px 3px 0 #808080, 4px 4px 0 #404040",
            imageRendering: "pixelated",
          }}
        >
          ABDUR RAB KHAN
        </h1>
      </div>
      <nav className="mt-4 flex justify-center">
        <ul className="flex gap-x-4">
          {navItems.map((item) => (
            <li
              key={item}
              className={cn(
                "cursor-pointer rounded-lg bg-white px-6 py-2 text-lg font-semibold text-gray-800 hover:bg-gray-200",
                currentTab === item.toLowerCase() && "bg-gray-300",
              )}
              onClick={() => handleTabClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Header;
