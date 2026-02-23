import React from "react";

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-dark-gray mt-1.5 min-h-0 w-full flex-1 overflow-hidden border-2">
      {children}
    </div>
  );
}

export default Body;
