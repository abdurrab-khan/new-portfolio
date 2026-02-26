import React from "react";

function TabContainer({
  children,
  titleImagePath,
}: {
  children: React.ReactNode;
  titleImagePath: string;
}) {
  return (
    <div className="flex size-full flex-col gap-y-2">
      <span className="h-18 w-full bg-blue-500"></span>
      <div className="bg-yellow h-fit min-h-76 w-full flex-1">{children}</div>
    </div>
  );
}

export default TabContainer;
