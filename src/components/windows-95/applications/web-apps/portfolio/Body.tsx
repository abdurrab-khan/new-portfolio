import Home from "./tabs/Home";
import Skills from "./tabs/Skills";
import Projects from "./tabs/Projects";
import Contact from "./tabs/Contact";
import BorderContainer from "@/components/windows-95/common/BorderContainer";

function Body({
  currentTab,
  setCurrentTab,
}: {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}) {
  let content;

  switch (currentTab) {
    case "home":
      content = <Home setCurrentTab={setCurrentTab} />;
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
      content = <Home setCurrentTab={setCurrentTab} />;
  }

  return (
    <section className="flex h-fit w-full flex-1 items-start justify-center px-4 pt-8 @md:px-10 @3xl:px-18">
      <BorderContainer className="h-fit w-full">{content}</BorderContainer>
    </section>
  );
}

export default Body;
