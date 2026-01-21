import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  mainStyle?: string;
  borderOneStyle?: string;
  borderTwoStyle?: string;
}

function Button({ children, mainStyle, borderOneStyle, borderTwoStyle, ...props }: ButtonProps) {
  return (
    <button className="group relative size-full outline-none" {...props}>
      {/* MAIN CONTENT */}
      <div
        className={cn(
          "border-dark-gray relative z-30 size-full border-r-2 border-b-2 bg-none px-1.5 group-active:border-t-2 group-active:border-r-0 group-active:border-b-0 group-active:border-l-2",
          mainStyle,
        )}
      >
        {children}
      </div>

      {/* BORDER EFFECT */}
      <span
        className={cn(
          "absolute -right-0.5 -bottom-0.5 z-0 h-[calc(100%+4px)] w-[calc(100%+4px)] border-t-2 border-l-2 border-black bg-none group-active:border-t-2 group-active:border-r-0 group-active:border-b-0 group-active:border-l-2 group-active:border-white",
          borderOneStyle,
        )}
      />
      <span
        className={cn(
          "absolute top-0 left-0 z-0 h-[calc(100%+2px)] w-[calc(100%+2px)] border-r-2 border-b-2 border-black bg-none group-active:border-t-2 group-active:border-r-0 group-active:border-b-0 group-active:border-l-2 group-active:border-white",
          borderTwoStyle,
        )}
      />
    </button>
  );
}

export default Button;
