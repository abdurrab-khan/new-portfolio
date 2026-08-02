type Project = {
  title: string;
  imageUrl: string;
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
    githubUrl: "https://github.com/abdurrab-khan/sketch_blade", // Updated to match your folder name pattern
    imageUrl:
      "https://res.cloudinary.com/dliujfjmi/image/upload/v1777395043/sketch-blade.vercel.app__guwvi9.webp",
    videoUrl:
      "https://res.cloudinary.com/dliujfjmi/video/upload/v1777380577/sketch-blade_vcx9to.mp4",
    demoUrl: "https://sketch-blade.vercel.app/",
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
    title: "Aladdin Deal Scraper",
    description:
      "An automated deal-hunting platform that crawls sites like Amazon and Flipkart to find the best product discounts and captures their screenshots. It pairs closely with a React Native mobile app, allowing users to effortlessly share these top deals directly to their social media groups or with friends.",
    githubUrl: "https://github.com/abdurrab-khan/aladdin-scrapper",
    videoUrl:
      "https://res.cloudinary.com/dliujfjmi/video/upload/v1785678676/aladdin-video_ww29cc.mp4",
    imageUrl:
      "https://res.cloudinary.com/dliujfjmi/image/upload/v1785678950/vlcsnap-2026-08-02-19h25m28s130_fzx4qs.png",
    techStack: ["React Native", "TypeScript", "Node.js", "Supabase", "Redis", "BullMQ", "Docker"],
  },
  {
    title: "Multiplayer Tic Tac Toe",
    description:
      "A fun, real-time multiplayer Tic-Tac-Toe game that lets you play locally or challenge friends online in custom rooms. It features a responsive UI with smooth animations for a seamless gaming experience.",
    imageUrl:
      "https://res.cloudinary.com/dliujfjmi/image/upload/v1784291658/Screenshot_2026-07-17_180223_nhpejx.png",
    videoUrl: "https://res.cloudinary.com/dliujfjmi/video/upload/v1784291306/tic-tac_ldd0zh.mp4",
    githubUrl: "https://github.com/abdurrab-khan/Multiplayer_Tic_Tac_Toe",
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
  {
    title: "Play By Choice",
    description:
      "A collaborative streaming app that lets you and your friends queue, play, and upvote your favorite Spotify and YouTube tracks in real-time. Create shared spaces to basically pass the aux cable from anywhere!",
    githubUrl: "https://github.com/abdurrab-khan/play-by-choice",
    imageUrl: "https://res.cloudinary.com/dliujfjmi/image/upload/v1784291733/drilldown_j0poe6.jpg",
    videoUrl: "https://res.cloudinary.com/dliujfjmi/video/upload/v1784291307/music_qev8xg.mp4",
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
    title: "Flowpay Landing Page",
    description:
      "A modern fintech landing page built with Next.js, React, Tailwind CSS, and Framer Motion, featuring smooth animations, partner logos, testimonials, and key stats to create a polished, trust-focused payment brand experience.",
    imageUrl:
      "https://res.cloudinary.com/dliujfjmi/image/upload/v1784292194/131dccebae9e68f5442fe194ee4f0b2b_ikd6ds.png",
    videoUrl:
      "https://res.cloudinary.com/dliujfjmi/video/upload/v1784292247/p61l71bveadplaywavzy_gppmww.mp4",
    githubUrl: "",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Metaverse Website",
    description:
      "An immersive metaverse landing page built with Next.js, React, Tailwind CSS, and Framer Motion, featuring animated sections, world selection cards, testimonials, and insight articles for a polished VR/gaming brand experience.",
    imageUrl:
      "https://res.cloudinary.com/dliujfjmi/image/upload/v1784292686/image_original_rxkod6.png",
    videoUrl:
      "https://res.cloudinary.com/dliujfjmi/video/upload/v1784292693/vufnqkyjrbcmkvxqm0gj_gfth1g.mp4",
    githubUrl: "https://github.com/abdurrab-khan/metaverse-landingPage",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
];
