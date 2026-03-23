import React from "react";

function TabContainer({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="flex size-full flex-col gap-y-2">
      <span className="flex h-18 w-full items-center justify-center">
        <p
          className="bg-linear-to-b from-blue-700 to-green-400 bg-clip-text text-6xl font-bold tracking-widest text-transparent uppercase"
          style={{
            WebkitTextStroke: "2px #1e1b4b",
            filter: "drop-shadow(3px 3px 0px #1e1b4b)",
          }}
        >
          {title}
        </p>
      </span>
      <div className="mx-auto w-4/5 rounded-sm border-2 border-t-white border-l-white border-b-dark-gray border-r-dark-gray bg-[#c0c0c0] p-px">
        <div className="flex flex-col gap-[2px]">
          <div className="h-px w-full bg-white opacity-90" />
          <div className="h-px w-full bg-[#808080]" />
        </div>
      </div>
      <div className="mt-1.5 h-fit min-h-76 w-full flex-1">{children}</div>
    </div>
  );
}

export default TabContainer;
