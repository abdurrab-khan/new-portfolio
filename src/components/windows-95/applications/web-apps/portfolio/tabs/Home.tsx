import React from "react";
import BorderContainer from "@/components/windows-95/common/BorderContainer";

function Home() {
  return (
    <div className="flex min-h-116 w-full flex-col items-start justify-center gap-x-4 gap-y-4 md:flex-row">
      {/* Profile image (left) */}
      <div className="flex h-46 w-56 flex-col">
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
          alt="Abdur Rab Khan"
          className="size-full object-contain"
        />
      </div>
      {/* Content body (right) */}
      <div className="mt-8 flex w-full flex-col items-start justify-start gap-y-4">
        <div className="font-ms-sans">
          <span className="text-xl font-semibold text-rose-600">WELCOME!</span>
          <p className="text-md text-gray-700">
            Full-stack dev. I work across the whole thing — frontend, backend, databases,
            deployment. Mostly React, Next.js, Tailwind up front; Node, Express, Redis, WebSockets
            on the backend. JS, TS, and some Python. I tend to overthink before I write code, but
            that's kind of the point.
          </p>
        </div>
        <BorderContainer className="size-full">
          <div className="flex h-56 w-full items-center justify-center rounded-md bg-gray-200 text-sm text-gray-700">
            Check out my projects and skills using the tabs above!
          </div>
        </BorderContainer>
      </div>
    </div>
  );
}

export default Home;
