import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  state?: "default" | "active";
  className?: string
}

function Button({ children, state = "default", className, ...props }: ButtonProps) {
  return (
    <button className={cn("group relative size-full select-none outline-none", className)} {...props}>
      {/* MAIN CONTENT */}
      <div
        id="main-content"
        className={cn(
          "relative z-30 size-full px-1 border-2 border-r-dark-gray border-b-dark-gray border-t-transparent border-l-transparent bg-transparent group-active:border-t-dark-gray group-active:border-l-dark-gray group-active:border-r-transparent group-active:border-b-transparent",
          state === "active" && "border-r-transparent border-b-transparent border-t-dark-gray border-l-dark-gray"
        )}
      >
        {children}
      </div>

      {/* BORDER EFFECT - Top and Left White Border */}
      <span
        id="border-effect-1"
        className={cn(
          "absolute -right-0.5 -bottom-0.5 z-0 h-[calc(100%+4px)] w-[calc(100%+4px)] border-t-2 border-l-2 border-white bg-transparent group-active:border-black",
          state === "active" ? "border-black" : "border-white ",
        )}
      />

      {/* BORDER EFFECT - Bottom and Right Dark Border */}
      <span
        id="border-effect-2"
        className={cn(
          "absolute top-0 left-0 z-0 h-[calc(100%+2px)] w-[calc(100%+2px)] border-r-2 border-b-2 border-black bg-transparent group-active:border-t-2 group-active:border-l-2 group-active:border-white",
          state === "active" ? "border-white" : "border-black",
        )}
      />
    </button>
  );
}

export default Button;
