import Window from "../layout/window/Window";

import type { WindowContent } from "@/types/window";

interface IBrowserProps {
  app: WindowContent<"browser">;
}

function Browser({ app }: IBrowserProps) {
  return (
    <Window app={app}>
      <div className="flex h-full w-full items-center justify-center">
        <span className="font-ms-sans text-dark-gray text-sm italic">
          It looks like you're trying to view the internet...
        </span>
      </div>
    </Window>
  );
}

export default Browser;
