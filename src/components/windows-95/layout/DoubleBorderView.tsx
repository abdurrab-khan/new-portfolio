import React from "react";
import { cn } from "@/lib/utils";

interface IViewProps {
  children: React.ReactNode;
  className?: string;
}

function DoubleBorderView({ children, ...props }: IViewProps) {
  return (
    <div
      className={cn(
        "after:border-dark-gray relative flex size-full items-center px-1.5 before:pointer-events-none before:absolute before:inset-0 before:size-full before:border-r-2 before:border-b-2 before:border-white after:pointer-events-none after:absolute after:inset-0 after:size-full after:border-t-2 after:border-l-2",
        props.className,
      )}
    >
      {children}
    </div>
  );
}

export default DoubleBorderView;
