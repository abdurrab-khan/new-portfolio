import type { AppType } from "./app";

// Main window types used in the application
type Windows = {
  id: string;
  address: string;
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
  type?: "browser";
  contents?: React.ReactNode;
};

type FileExplorer = Windows & {
  type?: "file-explorer";
  contents?: AppType[];
};

export type { Browser, FileExplorer };
