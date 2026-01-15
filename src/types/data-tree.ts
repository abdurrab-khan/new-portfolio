import type { FolderIcon, ImageIcon, ReactNodeIcon, TextIcon } from "./icon";

type ImageNode = {
  data: ImageIcon;
};

type FolderNode = {
  data: FolderIcon;
  children?: {
    [key: string]: ImageNode | FolderNode | ReactNode | TextNode;
  };
};

type TextNode = {
  data: TextIcon;
};

type ReactNode = {
  data: ReactNodeIcon;
};

type DataTreeType = {
  [key: string]: {
    data: ImageNode["data"] | FolderNode["data"] | ReactNode["data"] | TextNode["data"];
    children?: {
      [key: string]: ImageNode | FolderNode | ReactNode | TextNode;
    };
  };
};

export type { DataTreeType, FolderNode, ImageNode };
