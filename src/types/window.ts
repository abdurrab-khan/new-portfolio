// Main window types used in the application
type WindowContent = {
  id: string;
  type: "file-explorer" | "browser" | "image-viewer" | "text-editor" | "browser" | "alert";
  address: string;
  zIndex: number;
  state: "open" | "minimized" | "full";
  url?: string;
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

export type { WindowContent };
