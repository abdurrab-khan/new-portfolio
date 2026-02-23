import React from "react";

function Body({ currentTab }: { currentTab: string }) {
  let content;

  switch (currentTab) {
    case "home":
      content = <>Home Tab</>;
      break;
    case "skills":
      content = <>Skills Tab</>;
      break;
    case "projects":
      content = <>Projects Tab</>;
      break;
    case "contact":
      content = <>Contact Tab</>;
      break;
    default:
      content = <>Home Tab</>;
  }

  return (
    <section className="relative w-full flex-1">
      <div className="absolute top-10 right-1/2 h-6/7 w-4/5 translate-x-1/2 bg-red-500">
        {content}
      </div>
    </section>
  );
}

export default Body;
