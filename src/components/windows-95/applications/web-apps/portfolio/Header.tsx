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
      <div className="text-yellow bg-linear-to-b from-[#195ff8] to-[#180083] px-4 py-4 text-center">
        <h1
          className="text-3xl font-bold tracking-widest uppercase @md:text-5xl"
          style={{
            textShadow:
              "1px 1px 0 #ffffff, 2px 2px 0 #c0c0c0, 3px 3px 0 #808080, 4px 4px 0 #404040",
            imageRendering: "pixelated",
          }}
        >
          ABDUR RAB KHAN
        </h1>
      </div>
      <nav className="mt-4 flex justify-center px-2">
        <ul className="flex flex-wrap justify-center gap-2 @md:gap-4">
          {navItems.map((item) => (
            <li
              key={item}
              className={cn(
                "cursor-pointer bg-[#c0c0c0] px-3 py-1 text-sm font-bold text-gray-800 uppercase @md:px-6 @md:py-2 @md:text-lg",
                "border-2 border-t-white border-r-black border-b-black border-l-white shadow-sm",
                currentTab === item.toLowerCase() &&
                  "border-t-black border-r-white border-b-white border-l-black bg-[#d4d4d4]",
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
