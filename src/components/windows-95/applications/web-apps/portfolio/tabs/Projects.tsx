import React, { useState } from "react";
import TabContainer from "./TabContainer";
import ProjectItem from "./ProjectItem";
import ProjectVideoDialog from "./ProjectVideoDialog";
import placeholderVideo from "@/assets/videos/hero.mp4";

interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  imagePath: string;
  githubLink: string;
  visitLink: string;
  videoPath: string;
}

const projectsData: ProjectData[] = [
  {
    title: "SketchBlade (2025-26)",
    description:
      "Built a collaborative whiteboard supporting 50+ concurrent users with conflict-free real-time sync using CRDT technology. Integrated tldraw CRDT sync with Socket.IO. Implemented role-based access control, file/folder management, and Clerk-based authentication with webhook support. Dockerized the entire stack.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "tldraw",
      "Express.js",
      "Clerk",
      "MongoDB",
      "Redis",
      "Socket.IO",
    ],
    imagePath: "https://placehold.co/320x180/0f172a/f8fafc/png?text=SketchBlade",
    githubLink: "#",
    visitLink: "#",
    videoPath: placeholderVideo,
  },
  {
    title: "Multiplayer Tic Tac Toe (2025)",
    description:
      "Built a real-time collaborative experience incorporating WebSockets. Enhanced security by implementing role-based access control, reducing unauthorized access attempts. Streamlined deployment by Dockerizing the full stack with Docker Compose, cutting environment setup time significantly.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Socket.IO",
      "Redis",
    ],
    imagePath: "https://placehold.co/320x180/1e293b/f8fafc/png?text=Tic+Tac+Toe",
    githubLink: "#",
    visitLink: "#",
    videoPath: placeholderVideo,
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Pick<
    ProjectData,
    "title" | "videoPath"
  > | null>(null);

  const handleOpenPreview = (project: ProjectData) => {
    setSelectedProject({
      title: project.title,
      videoPath: project.videoPath,
    });
  };

  const handleClosePreview = () => setSelectedProject(null);

  return (
    <TabContainer titleImagePath="/assets/windows-95/applications/web-apps/portfolio/projects-title.png">
      <div className="relative">
        <div className="flex flex-col gap-4 pb-4">
          {projectsData.map((project, idx) => (
            <ProjectItem
              key={idx}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imagePath={project.imagePath}
              githubLink={project.githubLink}
              visitLink={project.visitLink}
              onOpenPreview={() => handleOpenPreview(project)}
            />
          ))}
        </div>
        {selectedProject && (
          <ProjectVideoDialog
            title={selectedProject.title}
            videoPath={selectedProject.videoPath}
            onClose={handleClosePreview}
          />
        )}
      </div>
    </TabContainer>
  );
}

export default Projects;
