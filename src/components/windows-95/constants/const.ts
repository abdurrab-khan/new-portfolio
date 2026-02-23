import reactIcon from "@/assets/icons/skills/react-js.png";
import htmlIcon from "@/assets/icons/skills/html.png";
import cssIcon from "@/assets/icons/skills/css.png";
import tailwindIcon from "@/assets/icons/skills/tailwind-css.png";
import nodeIcon from "@/assets/icons/skills/node-js.png";
import expressIcon from "@/assets/icons/skills/express-js.png";
import socketIcon from "@/assets/icons/skills/socket-io.png";
import jsIcon from "@/assets/icons/skills/javascript.png";
import tsIcon from "@/assets/icons/skills/typescript.png";
import pythonIcon from "@/assets/icons/skills/python.png";
import cppIcon from "@/assets/icons/skills/cpp.png";
import postgresIcon from "@/assets/icons/skills/postgres.png";
import mongoIcon from "@/assets/icons/skills/mongodb.png";
import redisIcon from "@/assets/icons/skills/redis.png";
import gitIcon from "@/assets/icons/skills/git.png";
import dockerIcon from "@/assets/icons/skills/docker.png";
import jestIcon from "@/assets/icons/skills/jest.png";
import figmaIcon from "@/assets/icons/skills/figma.png";

const skillCategories = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: reactIcon },
      { name: "Next.js", icon: null },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "Vite", icon: null },
      { name: "TanStack Query", icon: null },
      { name: "React Hook Form", icon: null },
      { name: "Framer Motion", icon: null },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: nodeIcon },
      { name: "Express.js", icon: expressIcon },
      { name: "Bull MQ", icon: null },
      { name: "NGINX", icon: null },
      { name: "WebSockets (Socket.IO)", icon: socketIcon },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: jsIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "C++", icon: cppIcon },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: postgresIcon },
      { name: "MongoDB", icon: mongoIcon },
      { name: "Redis", icon: redisIcon },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: null },
      { name: "Docker", icon: dockerIcon },
      { name: "Linux", icon: null },
      { name: "Jest", icon: jestIcon },
      { name: "cURL", icon: null },
      { name: "Postman", icon: null },
      { name: "Figma", icon: figmaIcon },
    ],
  },
  {
    category: "Core",
    items: [
      { name: "Data Structures and Algorithms", icon: null },
      { name: "Object Oriented Programming", icon: null },
      { name: "System Design", icon: null },
    ],
  },
];

const projects = [
  {
    title: "SketchBlade",
    type: "Personal Projects",
    date: "2024",
    lastUpdated: "Feb 2026",
    summary:
      "Real-time collaborative whiteboard for 50+ concurrent users with CRDT sync, live cursors, role-based access, and file management. Built with React, Node.js, MongoDB, Redis, and Socket.IO. Dockerized with Docker Compose.",
    techStack: {
      Frontend:
        "React, TypeScript, Tailwind CSS, Framer Motion, Radix UI, Shadcn UI, Vite, tldraw, Konva",
      Backend: "Express.js, TypeScript, Clerk, Mongoose, Zod, Socket.IO, Svix Webhooks",
      Database: "MongoDB, Redis",
      "APIs/Integrations": "Clerk API, tldraw Sync, Socket.IO, Svix",
    },
    link: "#",
    image: "https://placehold.co/600x400/000080/FFFFFF/png?text=SketchBlade",
  },
  {
    title: "Multiplayer Tic Tac Toe",
    type: "Personal Projects",
    date: "2023",
    lastUpdated: "Jan 2026",
    summary:
      "Real-time multiplayer Tic Tac Toe with public/private rooms, WebSocket move sync, win detection, and disconnect handling. Supports online and offline play with responsive UI feedback.",
    techStack: {
      Frontend:
        "React, TypeScript, Vite, Tailwind CSS, Radix UI, React Router, Socket.IO Client, GSAP",
      Backend: "Node.js, Express, TypeScript, Socket.IO",
      "Database/Cache": "Redis",
      "APIs/Tools": "REST API, WebSockets",
    },
    link: "#",
    image: "https://placehold.co/600x400/000080/FFFFFF/png?text=Tic+Tac+Toe",
  },
];

export { skillCategories, projects };
