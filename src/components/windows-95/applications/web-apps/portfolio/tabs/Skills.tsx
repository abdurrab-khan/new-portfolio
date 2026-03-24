import TabContainer from "./TabContainer";

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
      <div className="flex flex-col gap-4 p-4 text-sm text-black">
        <div className="grid grid-cols-1 gap-4 pb-8 md:grid-cols-2">
          {skillsCategories.map((category, index) => {
            const dotColorA = index % 3 === 0 ? "#808080" : index % 3 === 1 ? "#ffff00" : "#00aa00";
            const dotColorB = index % 3 === 0 ? "#ffff00" : index % 3 === 1 ? "#00aa00" : "#808080";
            return (
              <div
                key={category.title}
                className="border-b-dark-gray border-r-dark-gray rounded-sm border-2 border-t-white border-l-white bg-[#c0c0c0] p-px"
              >
                <div className="border-t-dark-gray border-l-dark-gray border-r-light-gray border-b-light-gray rounded-sm border-2 bg-white">
                  <div className="border-b-dark-gray flex items-center justify-between border-b-2 bg-linear-to-b from-[#000080] to-[#1e1b4b] px-2 py-1">
                    <div className="flex min-w-0 items-center gap-2">
                      <div className="flex items-center gap-1">
                        <span className="h-2.5 w-2.5 rounded-sm bg-[#808080]" />
                        <span
                          className="h-2.5 w-2.5 rounded-sm"
                          style={{ backgroundColor: dotColorA }}
                        />
                        <span
                          className="h-2.5 w-2.5 rounded-sm"
                          style={{ backgroundColor: dotColorB }}
                        />
                      </div>
                      <span className="text-yellow truncate text-xs font-bold">
                        {category.title}
                      </span>
                    </div>
                    <span className="text-yellow text-[10px] font-bold opacity-90">
                      {index + 1}
                    </span>
                  </div>

                  <div className="p-3">
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </TabContainer>
  );
}

export default Skills;
