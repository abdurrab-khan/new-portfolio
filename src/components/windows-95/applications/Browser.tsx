import Window from "../layout/window/Window";

import type { WindowContent } from "@/types/window";
import Portfolio from "./web-apps/portfolio/Portfolio";

interface IBrowserProps {
  app: WindowContent;
}

function Browser({ app }: IBrowserProps) {
  return (
    <Window app={app}>
      <Portfolio />
    </Window>
  );
}

export default Browser;
