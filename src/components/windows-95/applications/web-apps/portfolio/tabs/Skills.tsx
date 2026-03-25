import { TabContainer, Frame } from "./Container";

const skillsCategories = [
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

function Skills() {
  return (
    <TabContainer title="My Skills">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillsCategories.map((category, index) => (
          <Frame title={category.title} index={index + 1}>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="border-b-dark-gray border-r-dark-gray inline-flex items-center rounded-sm border border-t-white border-l-white bg-[#c0c0c0] px-2 py-1 text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Frame>
        ))}
      </div>
    </TabContainer>
  );
}

export default Skills;
