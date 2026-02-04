import type { FolderIcon, ImageIcon, ReactNodeIcon, TextIcon } from "./app";

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

type NodeData = {
  data: ImageNode["data"] | FolderNode["data"] | ReactNode["data"] | TextNode["data"];
  children?: {
    [key: string]: ImageNode | FolderNode | ReactNode | TextNode;
  };
};

type DataTreeType = {
  [key: string]: NodeData;
};

export type { DataTreeType, FolderNode, ImageNode, NodeData };
