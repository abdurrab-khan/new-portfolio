import { Frame } from "./Container";

function Home({ setCurrentTab }: { setCurrentTab: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <div className="flex min-h-116 w-full flex-col items-start justify-center gap-x-8 gap-y-4 p-4 md:flex-row">
      {/* Profile image (left) */}
      <div className="flex w-full flex-col md:w-auto">
        <Frame title="Profile">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            alt="Abdur Rab Khan"
            className="border-b-dark-gray border-r-dark-gray h-72 w-56 rounded-sm border-2 border-t-white border-l-white bg-[#c0c0c0] object-cover"
            style={{ imageRendering: "pixelated" }}
          />
        </Frame>
      </div>

      {/* Content body (right) */}
      <div className="mt-8 flex w-full flex-col items-start justify-start gap-y-4 md:mt-0">
        {/* Welcome window */}
        <Frame title="WELCOME!">
          <div className="font-ms-sans">
            <span className="text-lg font-semibold text-rose-600">WELCOME!</span>
            <p className="mt-2 text-sm text-gray-700">
              Full-stack dev. I work across the whole thing — frontend, backend, databases,
              deployment. Mostly React, Next.js, Tailwind up front; Node, Express, Redis, WebSockets
              on the backend. JS, TS, and some Python. I tend to overthink before I write code, but
              that's kind of the point.
            </p>
          </div>
        </Frame>

        {/* Two-panel grid */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {/* WHAT I DO */}
          <Frame title="What I Do" showTitleBar={false}>
            <div className="flex flex-col gap-2 text-sm">
              <div className="border-b-dark-gray border-r-dark-gray rounded-sm border-2 border-t-white border-l-white bg-[#c0c0c0] px-3 py-2">
                Build clean UI with React/Next, then wire it to fast backends.
              </div>
              <div className="border-b-dark-gray border-r-dark-gray rounded-sm border-2 border-t-white border-l-white bg-[#c0c0c0] px-3 py-2">
                Design APIs, real-time features, and data layers that stay reliable.
              </div>
              <div className="border-b-dark-gray border-r-dark-gray rounded-sm border-2 border-t-white border-l-white bg-[#c0c0c0] px-3 py-2">
                Ship and iterate: testing, monitoring, and performance improvements.
              </div>
            </div>
          </Frame>

          {/* TECH SNAPSHOT */}
          <Frame title="TECH SNAPSHOT" showTitleBar={false}>
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
                  className="border-b-dark-gray border-r-dark-gray inline-flex items-center rounded-sm border border-t-white border-l-white bg-[#c0c0c0] px-2 py-1 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Frame>
        </div>

        {/* Quick actions */}
        <Frame title="QUICK ACTIONS" showTitleBar={false}>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCurrentTab("projects")}
              className="border-b-dark-gray border-r-dark-gray active:border-t-dark-gray active:border-l-dark-gray inline-flex items-center justify-center rounded-sm border border-t-white border-l-white bg-[#c0c0c0] px-3 py-1 text-xs font-semibold ring-0 outline-none hover:bg-[#dfdfdf] active:border-r-white active:border-b-white"
            >
              Open Projects
            </button>
            <button
              onClick={() => setCurrentTab("skills")}
              className="border-b-dark-gray border-r-dark-gray active:border-t-dark-gray active:border-l-dark-gray inline-flex items-center justify-center rounded-sm border border-t-white border-l-white bg-[#c0c0c0] px-3 py-1 text-xs font-semibold hover:bg-[#dfdfdf] active:border-r-white active:border-b-white"
            >
              Open Skills
            </button>
            <button
              onClick={() => setCurrentTab("contact")}
              className="border-b-dark-gray border-r-dark-gray active:border-t-dark-gray active:border-l-dark-gray inline-flex items-center justify-center rounded-sm border border-t-white border-l-white bg-[#c0c0c0] px-3 py-1 text-xs font-semibold hover:bg-[#dfdfdf] active:border-r-white active:border-b-white"
            >
              Open Contact
            </button>
          </div>
        </Frame>
      </div>
    </div>
  );
}

export default Home;
