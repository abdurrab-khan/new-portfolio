import React from "react";

function Home() {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-x-6 gap-y-4 md:flex-row">
      <div className="flex h-full w-56 flex-col">
        {/* Profile image */}
        <div className="h-56 w-full">
          <img
            src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
            alt="Dancing cat"
            className="size-full object-contain"
          />
        </div>
      </div>
      <div className="mt-8 size-full flex-1">
        <div className="flex size-full flex-col gap-y-3">
          <div className="font-ms-sans">
            <h1 className="text-xl text-rose-600">WELCOME!</h1>
            <p className="text-md text-gray-700">
              I'm a software developer with a passion for creating engaging web experiences. This
              portfolio is a playful throwback to the Windows 95 era, showcasing my projects and
              skills in a nostalgic interface.
            </p>
          </div>
          <div className="bg-yellow size-full flex-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
