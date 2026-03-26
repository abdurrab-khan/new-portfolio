type Project = {
  title: string;
  githubUrl: string;
  demoUrl?: string;
  videoUrl?: string;
  techStack: string[];
};

export const skillsCategories = [
  { title: "Frontend", items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  {
    title: "Frontend Libraries",
    items: ["Vite", "TanStack Query", "React Hook Form", "Framer Motion", "Zod"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Bull MQ", "NGINX", "WebSockets (Socket.IO)"],
  },
  { title: "Programming", items: ["JavaScript (ES6+)", "TypeScript", "Python", "C++"] },
  { title: "Database", items: ["PostgreSQL", "MongoDB", "Redis"] },
  {
    title: "Testing & Tools",
    items: ["Git", "GitHub", "Docker", "Linux", "Jest", "cURL", "Postman", "Figma"],
  },
  {
    title: "Concepts",
    items: ["Data Structures & Algorithms", "Object Oriented Programming", "System Design"],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem-solving",
      "Team collaboration",
      "Communication",
      "Self-learning",
      "Fast learner",
    ],
  },
];

export const techSpots = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "Express",
  "Redis",
  "WebSockets",
  "PostgreSQL",
];

export const projects: Project[] = [
  {
    title: "Portfolio OS",
    githubUrl: "https://github.com/your-username/portfolio-os",
    demoUrl: "https://your-demo-link.com",
    videoUrl: "https://cdn.pixabay.com/video/2026/01/28/331030_tiny.mp4",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "E-Commerce Terminal",
    githubUrl: "https://github.com/your-username/e-commerce-terminal",
    videoUrl: "https://cdn.pixabay.com/video/2026/01/28/331030_tiny.mp4",
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
