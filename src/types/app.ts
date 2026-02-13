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

type ReactNodeIcon = Icon & {
  type: "react-node";
  component: React.ReactNode;
};

type App = FolderIcon | ImageIcon | TextIcon | ReactNodeIcon;

export type { App, FolderIcon, ImageIcon, TextIcon, ReactNodeIcon };
