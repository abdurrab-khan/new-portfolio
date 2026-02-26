import React from "react";

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-dark-gray mt-1.5 h-fit w-full flex-1 shrink-0 overflow-y-auto border-2">
      {children}
    </div>
  );
}

export default Body;
