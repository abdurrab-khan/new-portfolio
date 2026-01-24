import React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps {
  type?: "horizontal" | "vertical";
}

function Separator({ type = "vertical" }: SeparatorProps) {
  return (
    <span
      className={cn(
        type === "vertical"
          ? "border-l-dark-gray inline-block h-full border-r-2 border-l-2 border-r-white"
          : "border-t-dark-gray inline-block w-full border-t-2 border-b-2 border-b-white",
      )}
    />
  );
}

export default Separator;
