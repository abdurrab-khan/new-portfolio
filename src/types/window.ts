import type { App } from "./app";

// Main window types used in the application
type Windows = {
  id: string;
  address: string;
  state: "open" | "minimized" | "full";
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

type AppType = "file-explorer" | "browser" | "image-viewer" | "text-editor" | "browser" | "alert";

type WindowContent<T extends AppType = AppType> = Windows & {
  type: T;
  contents?: T extends "file-explorer"
    ? App[]
    : T extends "browser"
      ? React.ReactNode
      : T extends "image-viewer"
        ? string
        : T extends "text-editor"
          ? string
          : never;
};

export type { WindowContent, AppType };
