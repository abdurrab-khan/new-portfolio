import type { FolderIcon, ImageIcon, BrowserIcon, TextIcon } from "./app";

type ImageNode = {
  data: ImageIcon;
};

type FolderNode = {
  data: FolderIcon;
  children?: {
    [key: string]: ImageNode | FolderNode | BrowserNode | TextNode;
  };
};

type TextNode = {
  data: TextIcon;
};

type BrowserNode = {
  data: BrowserIcon;
};

type NodeData = {
  data: ImageNode["data"] | FolderNode["data"] | BrowserNode["data"] | TextNode["data"];
  children?: {
    [key: string]: ImageNode | FolderNode | BrowserNode | TextNode;
  };
};

type DataTreeType = {
  [key: string]: NodeData;
};

export type { DataTreeType, FolderNode, ImageNode, NodeData };
