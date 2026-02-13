import Window from "../layout/Window";

import type { WindowContent } from "@/types/window";

interface IBrowserProps {
  app: WindowContent<"browser">;
}

function Browser({ app }: IBrowserProps) {
  return (
    <Window app={app}>
      <></>
    </Window>
  );
}

export default Browser;
