import Windows from "./components/windows-95/Windows";

function App() {
  return (
    <main className="scroll-none flex h-screen w-screen items-center justify-center overflow-hidden bg-gray-400">
      <div className="size-full">
        <Windows />
      </div>
    </main>
  );
}

export default App;
