import { useEffect, useState } from "react";
import { TabContainer, Frame } from "./Container";
import Button from "@/components/windows-95/common/Button";
import { projects } from "@/constants/personal";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const makePlaceholderImage = (title: string) => {
  const safeTitle = escapeXml(title.toUpperCase());
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='360' viewBox='0 0 600 360'>
  <defs>
    <pattern id='c' width='20' height='20' patternUnits='userSpaceOnUse'>
      <rect width='10' height='10' fill='#ffffff'/>
      <rect x='10' y='0' width='10' height='10' fill='#cccccc'/>
      <rect x='0' y='10' width='10' height='10' fill='#cccccc'/>
      <rect x='10' y='10' width='10' height='10' fill='#ffffff'/>
    </pattern>
    <pattern id='scan' width='4' height='4' patternUnits='userSpaceOnUse'>
      <rect width='4' height='1' fill='#000000' opacity='0.10'/>
    </pattern>
  </defs>

  <rect width='600' height='360' fill='#c0c0c0'/>

  <!-- Outer bezel -->
  <rect x='16' y='16' width='568' height='328' fill='url(#c)' opacity='0.95'/>
  <rect x='16' y='16' width='568' height='328' fill='none' stroke='#808080' stroke-width='6'/>

  <!-- Window title bar -->
  <rect x='26' y='26' width='548' height='44' fill='#000080'/>
  <rect x='26' y='26' width='548' height='44' fill='url(#scan)' opacity='0.18'/>
  <rect x='42' y='38' width='12' height='12' fill='#808080'/>
  <rect x='60' y='38' width='12' height='12' fill='#ffff00'/>
  <rect x='78' y='38' width='12' height='12' fill='#00aa00'/>
  <text x='50%' y='48' text-anchor='middle'
    font-family='monospace' font-size='16' fill='#ffff00' font-weight='800'
    dominant-baseline='middle'>
    WINDOWS 95 PREVIEW
  </text>

  <!-- Main content -->
  <rect x='26' y='70' width='548' height='290' fill='url(#c)' opacity='0.92'/>
  <rect x='26' y='70' width='548' height='290' fill='url(#scan)' opacity='0.22'/>

  <text x='50%' y='150' text-anchor='middle'
    font-family='monospace' font-size='36' fill='#000080' font-weight='900'
    dominant-baseline='middle'>
    ${safeTitle}
  </text>
  <text x='50%' y='190' text-anchor='middle'
    font-family='monospace' font-size='14' fill='#000'
    dominant-baseline='middle'>
    PLACEHOLDER PREVIEW
  </text>

  <!-- Faux frame highlight -->
  <rect x='22' y='22' width='556' height='316' fill='none' stroke='#ffffff' stroke-width='3' opacity='0.55'/>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

function Projects() {
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    videoUrl: string;
    index: number;
  } | null>(null);

  return (
    <TabContainer title="Projects">
      <div className="grid grid-cols-1 gap-4 @lg:grid-cols-2 @6xl:grid-cols-3">
        {projects.map((project, index) => (
          <Frame key={project.title} title={project.title} showTitleBar={false} index={index + 1}>
            <div
              className={`border-t-dark-gray border-l-dark-gray border-r-light-gray border-b-light-gray mt-2 rounded-sm border-2 bg-white p-2 ${project.videoUrl ? "cursor-pointer transition-colors hover:bg-gray-100" : ""}`}
              onClick={() => {
                if (project.videoUrl)
                  setActiveVideo({
                    title: project.title,
                    videoUrl: project.videoUrl,
                    index: index + 1,
                  });
              }}
              title={project.videoUrl ? "Click to play demo video" : undefined}
            >
              <div className="flex flex-col gap-3">
                {/* Placeholder "preview image" */}
                <div className="bg-checkerboard group relative p-2">
                  <img
                    src={makePlaceholderImage(project.title)}
                    alt={`${project.title} preview`}
                    className="border-b-dark-gray border-r-dark-gray h-32 w-full rounded-sm border-2 border-t-white border-l-white bg-[#c0c0c0] object-cover"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>

                {/* Tech stack */}
                <div className="mt-1">
                  <div className="border-t-dark-gray border-l-dark-gray border-b-light-gray border-r-light-gray relative mt-3 border-2 p-2">
                    <span
                      className="absolute -top-3 left-2 bg-white px-1 text-xs font-bold text-black"
                      style={{ fontFamily: "monospace" }}
                    >
                      Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#000080] px-1.5 py-0.5 text-xs text-white"
                          style={{ fontFamily: "monospace" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links / Actions */}
                <div className="mt-2 flex justify-end gap-2 border-t border-gray-300 pt-3">
                  <RetroButton href={project.githubUrl} label="GitHub" />

                  {project.demoUrl ? (
                    <RetroButton href={project.demoUrl} label="Visit" variant="primary" />
                  ) : (
                    <span className="border-t-dark-gray border-l-dark-gray inline-flex items-center justify-center border border-r-white border-b-white bg-[#c0c0c0] px-3 py-1 text-xs font-semibold text-gray-500 shadow-[1px_1px_0px_#fff]">
                      Visit N/A
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Frame>
        ))}
      </div>
      {activeVideo && (
        <ProjectVideoDialog
          title={activeVideo.title}
          videoPath={activeVideo.videoUrl}
          index={activeVideo.index}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </TabContainer>
  );
}

function ProjectVideoDialog({
  title,
  index,
  videoPath,
  onClose,
}: {
  title: string;
  index: number;
  videoPath: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key.toLowerCase() === "q") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 p-2 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
        <Frame title={`${title} Demo`} showTitleBar={false} index={index}>
          <div className="mb-3 flex items-center justify-between gap-3 border-b border-gray-300 pb-2">
            <h3 className="text-sm font-bold text-purple-900">{title} Preview</h3>
            <div className="h-7 w-18">
              <Button type="button" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
          <video className="min-h-100 w-full bg-black" controls autoPlay muted loop playsInline>
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Frame>
      </div>
    </div>
  );
}

function RetroButton({
  href,
  label,
  variant = "default",
}: {
  href: string;
  label: string;
  variant?: "default" | "primary";
}) {
  const base =
    "inline-flex items-center justify-center border-b-dark-gray border-r-dark-gray border border-t-white border-l-white px-3 py-1 text-xs font-semibold";

  const variantClass =
    variant === "primary"
      ? "bg-[#000080] text-yellow hover:bg-[#1e1b4b]"
      : "bg-[#c0c0c0] text-black hover:bg-[#d4d4d4]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variantClass}`}
      onClick={(e) => e.stopPropagation()}
    >
      {label}
    </a>
  );
}

export default Projects;
