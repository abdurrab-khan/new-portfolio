import React from "react";
import BorderContainer from "../../../../common/BorderContainer";

interface SkillItemProps {
  category: string;
  skills: string[];
}

export default function SkillItem({ category, skills }: SkillItemProps) {
  return (
    <BorderContainer className="mb-4 bg-white p-3 shadow-md">
      <h3 className="mb-2 border-b border-gray-300 pb-1 font-bold text-blue-900">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded border border-gray-400 bg-gray-200 px-2 py-1 text-xs shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </BorderContainer>
  );
}
