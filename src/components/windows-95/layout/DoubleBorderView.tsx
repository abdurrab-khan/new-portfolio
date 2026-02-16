import React from "react";

interface IViewProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function DoubleBorderView({ children, ...props }: IViewProps) {
  return (
    <div
      className="after:border-dark-gray relative flex size-full items-center px-1.5 before:absolute before:inset-0 before:size-full before:border-r-2 before:border-b-2 before:border-white after:absolute after:inset-0 after:size-full after:border-t-2 after:border-l-2"
      {...props}
    >
      {children}
    </div>
  );
}

export default DoubleBorderView;
