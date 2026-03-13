import React from "react";
import TabContainer from "./TabContainer";
import SkillItem from "./SkillItem";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Frontend Libraries",
    skills: ["Vite", "TanStack Query", "React Hook Form", "Framer Motion", "Zod"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Bull MQ", "NGINX", "WebSockets (Socket.IO)"],
  },
  {
    category: "Programming",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C++"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Testing & Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "Jest", "cURL", "Postman", "Figma"],
  },
  {
    category: "Concepts",
    skills: ["Data Structures and Algorithms", "Object Oriented Programming", "System Design"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem-solving",
      "Team collaboration",
      "Communication",
      "Self-learning",
      "Fast learner",
    ],
  },
];

function Skills() {
  return (
    <TabContainer titleImagePath="/assets/windows-95/applications/web-apps/portfolio/skills-title.png">
      <div className="grid grid-cols-1 gap-4 pb-4 md:grid-cols-2">
        {skillCategories.map((cat, idx) => (
          <SkillItem key={idx} category={cat.category} skills={cat.skills} />
        ))}
      </div>
    </TabContainer>
  );
}

export default Skills;
