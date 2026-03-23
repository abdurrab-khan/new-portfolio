
function Home() {
  return (
    <div className="flex min-h-116 w-full flex-col items-start justify-center gap-x-8 gap-y-4 md:flex-row">
      {/* Profile image (left) */}
      <div className="flex w-full flex-col md:w-auto">
        <div className="rounded-sm border-2 border-t-white border-l-white border-b-dark-gray border-r-dark-gray bg-[#c0c0c0] p-px">
          <div className="rounded-sm border-2 border-t-dark-gray border-l-dark-gray border-r-light-gray border-b-light-gray bg-white">
            <div className="flex items-center justify-between border-b-2 border-b-dark-gray bg-linear-to-b from-[#000080] to-[#1e1b4b] px-2 py-1">
              <div className="flex min-w-0 items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#808080]" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#ffff00]" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#00aa00]" />
                </div>
                <span className="truncate text-[11px] font-bold text-yellow">PROFILE</span>
              </div>
              <span className="text-[10px] font-bold text-yellow opacity-90">95</span>
            </div>

            <div className="bg-checkerboard p-2">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Abdur Rab Khan"
                className="h-72 w-56 rounded-sm border-2 border-t-white border-l-white border-b-dark-gray border-r-dark-gray object-contain bg-[#c0c0c0]"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Content body (right) */}
      <div className="mt-8 flex w-full flex-col items-start justify-start gap-y-4 md:mt-0">
        {/* Welcome window */}
        <div className="w-full rounded-sm border-2 border-t-white border-l-white border-b-dark-gray border-r-dark-gray bg-[#c0c0c0] p-px">
          <div className="rounded-sm border-2 border-t-dark-gray border-l-dark-gray border-r-light-gray border-b-light-gray bg-white">
            <div className="flex items-center justify-between border-b-2 border-b-dark-gray bg-linear-to-b from-[#000080] to-[#1e1b4b] px-2 py-1">
              <div className="flex min-w-0 items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#808080]" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#ffff00]" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#00aa00]" />
                </div>
                <span className="truncate text-[11px] font-bold text-yellow">WELCOME</span>
              </div>
              <span className="text-[10px] font-bold text-yellow opacity-90">95</span>
            </div>

            <div className="p-3">
              <div className="font-ms-sans">
                <span className="text-lg font-semibold text-rose-600">WELCOME!</span>
                <p className="mt-2 text-sm text-gray-700">
                  Full-stack dev. I work across the whole thing — frontend, backend, databases,
                  deployment. Mostly React, Next.js, Tailwind up front; Node, Express, Redis,
                  WebSockets on the backend. JS, TS, and some Python. I tend to overthink before I
                  write code, but that's kind of the point.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Two-panel grid */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {/* WHAT I DO */}
          <div className="w-full rounded-sm border-2 border-t-white border-l-white border-b-dark-gray border-r-dark-gray bg-[#c0c0c0] p-px">
            <div className="rounded-sm border-2 border-t-dark-gray border-l-dark-gray border-r-light-gray border-b-light-gray bg-white">
              <div className="flex items-center justify-between border-b-2 border-b-dark-gray bg-linear-to-b from-[#000080] to-[#1e1b4b] px-2 py-1">
                <span className="text-[11px] font-bold text-yellow">WHAT I DO</span>
                <span className="text-[10px] font-bold text-yellow opacity-90">01</span>
              </div>

              <div className="p-3">
                <div className="flex flex-col gap-2 text-sm">
                  <div className="rounded-sm border-2 border-t-white border-l-white border-b-dark-gray border-r-dark-gray bg-[#c0c0c0] px-3 py-2">
                    Build clean UI with React/Next, then wire it to fast backends.
                  </div>
                  <div className="rounded-sm border-2 border-t-white border-l-white border-b-dark-gray border-r-dark-gray bg-[#c0c0c0] px-3 py-2">
                    Design APIs, real-time features, and data layers that stay reliable.
                  </div>
                  <div className="rounded-sm border-2 border-t-white border-l-white border-b-dark-gray border-r-dark-gray bg-[#c0c0c0] px-3 py-2">
                    Ship and iterate: testing, monitoring, and performance improvements.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TECH SNAPSHOT */}
          <div className="w-full rounded-sm border-2 border-t-white border-l-white border-b-dark-gray border-r-dark-gray bg-[#c0c0c0] p-px">
            <div className="rounded-sm border-2 border-t-dark-gray border-l-dark-gray border-r-light-gray border-b-light-gray bg-white">
              <div className="flex items-center justify-between border-b-2 border-b-dark-gray bg-linear-to-b from-[#000080] to-[#1e1b4b] px-2 py-1">
                <span className="text-[11px] font-bold text-yellow">TECH SNAPSHOT</span>
                <span className="text-[10px] font-bold text-yellow opacity-90">02</span>
              </div>

              <div className="p-3">
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "TypeScript",
                    "Node.js",
                    "Express",
                    "Redis",
                    "WebSockets",
                    "PostgreSQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-sm border-b-dark-gray border-r-dark-gray border border-t-white border-l-white bg-[#c0c0c0] px-2 py-1 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="w-full rounded-sm border-2 border-t-white border-l-white border-b-dark-gray border-r-dark-gray bg-[#c0c0c0] p-px">
          <div className="rounded-sm border-2 border-t-dark-gray border-l-dark-gray border-r-light-gray border-b-light-gray bg-white">
            <div className="flex items-center justify-between border-b-2 border-b-dark-gray bg-linear-to-b from-[#000080] to-[#1e1b4b] px-2 py-1">
              <span className="text-[11px] font-bold text-yellow">QUICK ACTIONS</span>
              <span className="text-[10px] font-bold text-yellow opacity-90">03</span>
            </div>

            <div className="p-3">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center justify-center rounded-sm border-b-dark-gray border-r-dark-gray border border-t-white border-l-white bg-[#c0c0c0] px-3 py-1 text-xs font-semibold">
                  Open Projects
                </span>
                <span className="inline-flex items-center justify-center rounded-sm border-b-dark-gray border-r-dark-gray border border-t-white border-l-white bg-[#c0c0c0] px-3 py-1 text-xs font-semibold">
                  Open Skills
                </span>
                <span className="inline-flex items-center justify-center rounded-sm border-b-dark-gray border-r-dark-gray border border-t-white border-l-white bg-[#c0c0c0] px-3 py-1 text-xs font-semibold">
                  Open Contact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
