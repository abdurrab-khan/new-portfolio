type Project = {
  title: string;
  description: string;
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
    title: "Sketch Blade",
    description:
      "Sketch Blade is a real-time collaborative digital whiteboard that lets teams draw, brainstorm, and share ideas together instantly. With live multi-user syncing, robust file management, and a smooth infinite canvas, it brings your creative workspace to life.",
    githubUrl: "https://github.com/abdurrab-khan/sketch-blade", // Updated to match your folder name pattern
    videoUrl: "https://cdn.pixabay.com/video/2026/01/28/331030_tiny.mp4",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Redux",
      "Clerk Auth",
      "Redis",
      "Docker",
    ],
  },
  {
    title: "Play By Choice",
    description:
      "A collaborative streaming app that lets you and your friends queue, play, and upvote your favorite Spotify and YouTube tracks in real-time. Create shared spaces to basically pass the aux cable from anywhere!",
    githubUrl: "https://github.com/abdurrab-khan/play-by-choice",
    videoUrl: "https://cdn.pixabay.com/video/2026/01/28/331030_tiny.mp4",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "NextAuth.js",
      "Framer Motion",
    ],
  },
  {
    title: "Aladdin Deal Scraper",
    description:
      "An automated deal-hunting platform that crawls sites like Amazon and Flipkart to find the best product discounts and captures their screenshots. It pairs closely with a React Native mobile app, allowing users to effortlessly share these top deals directly to their social media groups or with friends.",
    githubUrl: "https://github.com/abdurrab-khan/aladdin-scrapper",
    videoUrl: "https://cdn.pixabay.com/video/2026/01/28/331030_tiny.mp4",
    techStack: ["React Native", "TypeScript", "Node.js", "Supabase", "Redis", "BullMQ", "Docker"],
  },
  {
    title: "Multiplayer Tic Tac Toe",
    description:
      "A fun, real-time multiplayer Tic-Tac-Toe game that lets you play locally or challenge friends online in custom rooms. It features a responsive UI with smooth animations for a seamless gaming experience.",
    githubUrl: "https://github.com/abdurrab-khan/Multiplayer_Tic_Tac_Toe",
    videoUrl: "https://cdn.pixabay.com/video/2026/01/28/331030_tiny.mp4",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Redis",
      "Tailwind CSS",
    ],
  },
];
