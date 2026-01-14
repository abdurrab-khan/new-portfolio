type ImageNode = {
  data: {
    name: string;
    type: "image";
    address: string;
    imagePath: string;
    iconPath: string;
  };
};

type FolderNode = {
  data: {
    name: string;
    type: "folder";
    iconPath: string;
    address: string;
  };
  children?: {
    [key: string]: FolderNode | ImageNode | ReactNode;
  };
};

type TextNode = {
  data: {
    name: string;
    type: "text";
    address: string;
    iconPath: string;
  };
};

type ReactNode = {
  data: {
    name: string;
    type: "react-node";
    address: string;
    iconPath: string;
    component: React.ReactNode;
  };
};

type DataTreeType = {
  [key: string]: {
    data: ImageNode["data"] | FolderNode["data"] | ReactNode["data"] | TextNode["data"];
    children?: {
      [key: string]: FolderNode | ImageNode | ReactNode | TextNode;
    };
  };
};

export type { DataTreeType, FolderNode, ImageNode };
