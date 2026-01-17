import Body from "@/components/windows-95/windows/Body";
import Taskbar from "@/components/windows-95/windows/taskbar/Taskbar";

function App() {
  return (
    <main className="size-screen scroll-none flex flex-col bg-[#008083]">
      <Body />
      <Taskbar />
    </main>
  );
}

export default App;
