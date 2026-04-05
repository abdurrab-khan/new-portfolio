type Icon = {
  name: string;
  address: string;
  iconPath: string;
  position?: {
    x: number;
    y: number;
  };
};

type FolderIcon = Icon & {
  type: "folder";
};

type ImageIcon = Icon & {
  type: "image";
  imagePath: string;
};

type TextIcon = Icon & {
  type: "text";
  content: string;
};

type BrowserIcon = Icon & {
  type: "browser";
  url: string;
  component: React.ReactNode;
};

type App = FolderIcon | ImageIcon | TextIcon | BrowserIcon;

export type { App, FolderIcon, ImageIcon, TextIcon, BrowserIcon };
