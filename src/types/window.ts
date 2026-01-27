import type { IconType } from "./icon";

// Main window types used in the application
type Windows = {
  state: "open" | "minimized";

  titleBar: {
    title: string;
    iconPath: string;
  };
  position: {
    x: number;
    y: number;
  };
  size: {
    height: number;
    width: number;
  };
};

type Browser = Windows & {
  type: "browser";
  url: string;
  contents: React.ReactNode;
};

type FileExplorer = Windows & {
  type: "file-explorer";
  address: string;
  contents?: IconType[];
};

export type { Browser, FileExplorer };
