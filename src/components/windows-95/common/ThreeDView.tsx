import { cn } from "@/lib/utils";
import React from "react";

const themeVariants = {
  default: {
    main: "border-dark-gray bg-light-gray",
    borderOne: "bg-white group-active:bg-black",
    borderTwo: "bg-black group-active:bg-white",
  },
  btn: {
    main: "border-gray-600 bg-gray-800",
    borderOne: "bg-gray-700 group-active:bg-black",
    borderTwo: "bg-black group-active:bg-gray-700",
  },
  gray: {
    main: "border-gray-500 bg-gray-600",
    borderOne: "bg-gray-400 group-active:bg-gray-600",
    borderTwo: "bg-gray-600 group-active:bg-gray-400",
  },
  something: {
    main: "border-blue-300 bg-blue-100",
    borderOne: "bg-blue-200 group-active:bg-blue-400",
    borderTwo: "bg-blue-400 group-active:bg-blue-200",
  },
};

interface ThreeDViewProps {
  children: React.ReactNode;
  theme?: keyof typeof themeVariants;
}

function ThreeDView({ children, theme = "default" }: ThreeDViewProps) {
  return (
    <div className="group relative size-full">
      {/* MAIN CONTENT */}
      <div
        className={cn(
          "border-dark-gray bg-light-gray relative z-30 size-full border-r-2 border-b-2 px-2 py-2 group-active:border-t-2 group-active:border-r-0 group-active:border-b-0 group-active:border-l-2",
          themeVariants[theme].main,
        )}
      >
        {children}
      </div>

      {/* BORDER EFFECT */}
      <span
        className={cn(
          "absolute right-0 bottom-0 z-10 h-[calc(100%+0.15rem)] w-[calc(100%+0.15rem)] bg-white group-active:bg-black",
          themeVariants[theme].borderOne,
        )}
      />
      <span
        className={cn(
          "absolute -right-[0.15rem] -bottom-[0.15rem] z-0 h-[calc(100%+0.30rem)] w-[calc(100%+0.30rem)] bg-black group-active:bg-white",
          themeVariants[theme].borderTwo,
        )}
      />
    </div>
  );
}

export default ThreeDView;
