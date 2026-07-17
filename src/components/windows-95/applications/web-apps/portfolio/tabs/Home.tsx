import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { Frame } from "./Container";
import { techSpots } from "@/constants/personal";

function Home({ setCurrentTab }: { setCurrentTab: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <div className="flex min-h-116 w-full flex-col items-start justify-center gap-x-8 gap-y-4 p-4 @2xl:flex-row">
      {/* Profile image (left) */}
      <div className="flex w-full flex-col @md:w-auto">
        <Frame title="Profile">
          <img
            src="https://pub-81e18240e1ba4002b841e7d326b86d34.r2.dev/my-image.png"
            alt="Abdur Rab Khan"
            className="border-b-dark-gray border-r-dark-gray h-72 w-56 rounded-sm border-2 border-t-white border-l-white bg-[#c0c0c0] object-cover"
            style={{ imageRendering: "pixelated" }}
          />
        </Frame>
        <ul className="mt-3 flex flex-wrap gap-3 text-xl text-blue-950">
          <li title="Github">
            <a href="https://github.com/abdurrab-khan" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/abdur-rab-khan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li title="Twitter (X)">
            <a href="https://twitter.com/abdurrabkhan01" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </div>

      {/* Content body (right) */}
      <div className="mt-8 flex w-full flex-col items-start justify-start gap-y-4 @md:mt-0">
        {/* Welcome window */}
        <Frame title="WELCOME!">
          <div className="font-ms-sans">
            <span className="text-lg font-semibold text-rose-600">WELCOME!</span>
            <p className="mt-2 text-sm text-gray-700">
              I am a full-stack developer who loves building real, useful web apps using React,
              Node.js, and TypeScript. I enjoy working on both the frontend and backend side, and I
              also have good knowledge of databases and real-time features. I always focus on
              writing clean and maintainable code that works well in real use.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Beyond coding, I'm passionate about performance optimization, scalability, and
              creating seamless user experiences. I continuously learn new technologies and best
              practices to stay ahead in the fast-evolving tech landscape.
            </p>
          </div>
        </Frame>

        {/* Two-panel grid */}
        <div className="grid w-full grid-cols-1 gap-4 @md:grid-cols-2">
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
              {techSpots.map((tech) => (
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
