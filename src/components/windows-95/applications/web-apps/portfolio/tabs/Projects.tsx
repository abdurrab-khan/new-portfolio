import { useEffect, useRef, useState } from "react";
import { TabContainer, Frame } from "./Container";
import Button from "@/components/windows-95/common/Button";
import { projects } from "@/constants/personal";

function Projects() {
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    videoUrl: string;
    index: number;
  } | null>(null);
  return (
    <TabContainer title="Projects">
      <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @7xl:grid-cols-3 @[100rem]:grid-cols-4">
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
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    className="border-b-dark-gray border-r-dark-gray h-32 w-full rounded-sm border-2 border-t-white border-l-white bg-[#c0c0c0] object-cover object-top"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>

                {/* Project Description */}
                <div className="mt-1">
                  <div className="border-t-dark-gray border-l-dark-gray border-b-light-gray border-r-light-gray relative mt-3 border-2 p-2">
                    <span
                      className="absolute -top-3 left-2 bg-white px-1 text-xs font-bold text-black"
                      style={{ fontFamily: "monospace" }}
                    >
                      Description
                    </span>
                    <div className="pt-1 text-sm text-gray-700">
                      {project.description ||
                        "No description provided for this project. Please check the GitHub repository for more details."}
                    </div>
                  </div>
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
  const containerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll the video container into view when the dialog opens
    if (videoContainerRef.current) {
      videoContainerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

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
      ref={containerRef}
      onClick={onClose}
      className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 p-2 backdrop-blur-sm"
    >
      <div className="w-240" onClick={(event) => event.stopPropagation()}>
        <Frame
          title={`${title} Demo`}
          showTitleBar={false}
          index={index}
          videoContainerRef={videoContainerRef}
        >
          <div className="mb-3 flex items-center justify-between gap-3 border-b border-gray-300 pb-2">
            <h3 className="text-sm font-bold text-purple-900">{title} Preview</h3>
            <div className="h-7 w-18">
              <Button type="button" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
          {videoPath ? (
            <video width="100%" height="auto" controls autoPlay muted loop>
              <source src={videoPath} type="video/mp4" />
              Your browser does not support the video.
            </video>
          ) : (
            <div className="flex min-h-100 w-full items-center justify-center">
              <p className="font-ms-sans max-w-md text-center text-sm text-gray-700">
                Video playback is currently unavailable. Please visit the project's GitHub
                repository to view the demo video.
              </p>
            </div>
          )}
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
