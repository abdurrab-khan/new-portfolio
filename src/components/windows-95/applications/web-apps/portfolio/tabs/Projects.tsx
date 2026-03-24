import TabContainer from "./TabContainer";

type Project = {
  title: string;
  githubUrl: string;
  demoUrl?: string;
  techStack: string[];
};

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

const projects: Project[] = [
  {
    title: "Portfolio OS",
    githubUrl: "https://github.com/your-username/portfolio-os",
    demoUrl: "https://your-demo-link.com",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "E-Commerce Terminal",
    githubUrl: "https://github.com/your-username/e-commerce-terminal",
    techStack: ["Next.js", "Node.js", "Payments API"],
  },
  {
    title: "Realtime Chat CRT",
    githubUrl: "https://github.com/your-username/realtime-chat-crt",
    demoUrl: "https://your-demo-link.com/chat",
    techStack: ["WebSockets", "Redis", "Express"],
  },
  {
    title: "Task Scheduler 95",
    githubUrl: "https://github.com/your-username/task-scheduler-95",
    techStack: ["BullMQ", "Postgres", "Docker"],
  },
];

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
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${variantClass}`}>
      {label}
    </a>
  );
}

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
    <TabContainer title="Projects">
      <div className="flex flex-col gap-6 p-4 text-sm text-black">
        <div className="grid grid-cols-1 gap-4 pb-8 md:grid-cols-2">
          {projects.map((project) => (
            <fieldset
              key={project.title}
              className="border-b-dark-gray border-r-dark-gray border-2 border-t-white border-l-white bg-[#c0c0c0] p-2"
            >
              <legend className="border-b-dark-gray border-r-dark-gray text-yellow flex items-center justify-between border-2 border-t-white border-l-white bg-linear-to-b from-[#000080] to-[#1e1b4b] px-2 py-1 text-xs font-bold">
                <div className="flex min-w-0 items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="h-2.5 w-2.5 rounded-sm bg-[#808080]" />
                    <span className="h-2.5 w-2.5 rounded-sm bg-[#ffff00]" />
                    <span className="h-2.5 w-2.5 rounded-sm bg-[#00aa00]" />
                  </div>
                  <span className="truncate">{project.title}</span>
                </div>
                <span className="opacity-90">95</span>
              </legend>

              <div className="border-t-dark-gray border-l-dark-gray border-r-light-gray border-b-light-gray mt-2 rounded-sm border-2 bg-white p-2">
                <div className="flex flex-col gap-3">
                  {/* Placeholder "preview image" */}
                  <div className="bg-checkerboard p-2">
                    <img
                      src={makePlaceholderImage(project.title)}
                      alt={`${project.title} preview`}
                      className="border-b-dark-gray border-r-dark-gray h-32 w-full rounded-sm border-2 border-t-white border-l-white bg-[#c0c0c0] object-cover"
                      style={{ imageRendering: "pixelated" }}
                    />
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    <RetroButton href={project.githubUrl} label="GitHub" />

                    {project.demoUrl ? (
                      <RetroButton href={project.demoUrl} label="Demo" variant="primary" />
                    ) : (
                      <span className="border-b-dark-gray border-r-dark-gray inline-flex items-center justify-center border border-t-white border-l-white bg-[#d4d4d4] px-3 py-1 text-xs font-semibold text-gray-500">
                        Demo N/A
                      </span>
                    )}
                  </div>

                  {/* Tech stack */}
                  <div>
                    <p className="mb-2 font-semibold underline decoration-black">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <div
                          key={tech}
                          className="border-b-dark-gray border-r-dark-gray border border-t-white border-l-white bg-[#c0c0c0] px-2 py-1 text-xs"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          ))}
        </div>
      </div>
    </TabContainer>
  );
}

export default Projects;
