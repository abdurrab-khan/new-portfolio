import React from "react";

interface IViewProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function View({ children, ...props }: IViewProps) {
  return (
    <div
      className="bg-light-gray pointer-events-auto relative size-max border-r-2 border-b-2 border-black"
      {...props}
    >
      <div className="p-1">{children}</div>

      {/* BORDER OVERLAY  */}
      <div className="absolute right-0 bottom-0 z-0 h-[calc(100%-2px)] w-[calc(100%-2px)] border-t-2 border-l-2 border-white bg-transparent"></div>
      <div className="border-dark-gray absolute right-0 bottom-0 z-10 h-[calc(100%-2px)] w-[calc(100%-2px)] border-r-2 border-b-2 bg-transparent"></div>
    </div>
  );
}

export default View;
