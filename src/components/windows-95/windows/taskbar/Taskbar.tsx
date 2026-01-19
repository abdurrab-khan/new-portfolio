import StartBtn from "./StartBtn";

function Taskbar() {
  return (
    <footer className="bg-light-gray h-(--taskbar-height) w-full">
      <div className="relative flex size-full items-center after:absolute after:top-0.5 after:h-0.5 after:w-full after:bg-white">
        <div className="px-2">
          {/* Start Section */}
          <div className="mt-1">
            <StartBtn />
          </div>

          {/* Volume, network Section */}
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Taskbar;
