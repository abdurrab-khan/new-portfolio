type Icon = {
  name: string;
  iconPath: string;
  position?: {
    x: number;
    y: number;
  };
};

type FolderIcon = Icon & {
  type: "folder";
  address: string;
  targetPath?: string;
};

type ImageIcon = Icon & {
  type: "image";
  address: string;
  imagePath: string;
};

type TextIcon = Icon & {
  type: "text";
  address: string;
};

type ReactNodeIcon = Icon & {
  type: "react-node";
  address: string;
  component: React.ReactNode;
};

type IconType = FolderIcon | ImageIcon | TextIcon | ReactNodeIcon;

export type { IconType, FolderIcon, ImageIcon, TextIcon, ReactNodeIcon };
