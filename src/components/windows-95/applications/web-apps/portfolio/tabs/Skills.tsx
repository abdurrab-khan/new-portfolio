import { skillsCategories } from "@/constants/personal";
import { TabContainer, Frame } from "./Container";

function Skills() {
  return (
    <TabContainer title="My Skills">
      <div className="grid grid-cols-1 gap-4 @lg:grid-cols-2">
        {skillsCategories.map((category, index) => (
          <Frame key={category.title} title={category.title} index={index + 1}>
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
