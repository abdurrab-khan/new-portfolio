import Windows from "./components/windows-95/Windows";
import Activity from "./Activity.tsx";
import Loading from "./components/Loading.tsx";

function App() {
  return (
    <main className="scroll-none relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#008083]">
      <Activity>
        <div className="size-full">
          <Windows />
        </div>
      </Activity>
      <Loading />
    </main>
  );
}

export default App;
