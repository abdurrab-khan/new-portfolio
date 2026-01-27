import App from "./App";

function TaskBarApps() {
  return (
    <div className="size-full flex-1 px-0.5 py-0.75 overflow-hidden">
      <div className="flex size-full gap-x-3">
        {
          Array(4).fill(0).map((_, idx) => <App key={idx} />)
        }
      </div>
    </div>
  );
}

export default TaskBarApps;
