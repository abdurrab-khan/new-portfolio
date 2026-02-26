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
    <section className="flex h-fit w-full flex-1 items-start justify-center pt-8">
      <BorderContainer className="h-fit w-4/5">{content}</BorderContainer>
    </section>
  );
}

export default Body;
