type Icon = {
  name: string;
  iconPath: string;
  address: string;
  position?: {
    x: number;
    y: number;
  };
};

type FolderIcon = Icon & {
  type: "folder";
  targetPath?: string;
};

type ImageIcon = Icon & {
  type: "image";
  imagePath: string;
};

type TextIcon = Icon & {
  type: "text";
};

type ReactNodeIcon = Icon & {
  type: "react-node";
  component: React.ReactNode;
};

type AppType = FolderIcon | ImageIcon | TextIcon | ReactNodeIcon;

export type { AppType, FolderIcon, ImageIcon, TextIcon, ReactNodeIcon };
