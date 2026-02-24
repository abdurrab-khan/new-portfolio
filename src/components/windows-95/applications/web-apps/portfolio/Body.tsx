import Home from "./tabs/Home";
import Skills from "./tabs/Skills";
import Projects from "./tabs/Projects";
import Contact from "./tabs/Contact";
import BorderContainer from "@/components/windows-95/common/BorderContainer";

function Body({ currentTab }: { currentTab: string }) {
  let content;

  switch (currentTab) {
    case "home":
      content = <Home />;
      break;
    case "skills":
      content = <Skills />;
      break;
    case "projects":
      content = <Projects />;
      break;
    case "contact":
      content = <Contact />;
      break;
    default:
      content = <Home />;
  }

  return (
    <section className="relative size-full flex-1 bg-red-500">
      <BorderContainer className="absolute top-8 right-1/2 h-full min-h-6/7 w-4/5 translate-x-1/2">
        {content}
      </BorderContainer>
    </section>
  );
}

export default Body;
