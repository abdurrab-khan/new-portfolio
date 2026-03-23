import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <div className="relative inline-block w-full">
      {/* Outer border for the sunken effect */}
      <div className="border-dark-gray pointer-events-none absolute inset-0 border-t-2 border-l-2" />
      <div className="pointer-events-none absolute inset-0 border-r-2 border-b-2 border-white" />
      {/* Inner border for the sunken effect */}
      <div className="pointer-events-none absolute inset-[2px] border-t-2 border-l-2 border-black" />
      <div className="pointer-events-none absolute inset-[2px] border-r-2 border-b-2 border-[#dfdfdf]" />

      <input
        ref={ref}
        className={cn(
          "w-full bg-white px-2 py-1 text-black outline-none",
          "border-4 border-transparent", // Space for the absolute borders
          className,
        )}
        {...props}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
