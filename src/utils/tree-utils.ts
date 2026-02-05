import DataTree from "@/data/tree";
import type { DataTreeType, NodeData } from "@/types/data-tree";

const getNode = (path: string, tree: DataTreeType = DataTree) => {
  const pathSegments = path
    .toLowerCase()
    .split("\\")
    .filter((s) => s.length > 0)
    .map((s) => s.replace(":", ""));

  let currentNode: DataTreeType | NodeData = tree;
  
  for(let i = 0; i < pathSegments.length; i++){
    const segment = pathSegments[i];
    currentNode  = currentNode[segment];

    // Return null if node doesn't exist
    if(currentNode === null) return currentNode;

    if (currentNode?.children && i !== pathSegments.length - 1) {
      currentNode = currentNode.children;
    } else {
      return i === pathSegments.length - 1 ? currentNode : null;
    }
  }

  return null;
};

const getChildren = (node: NodeData | null) => {
  // Return blank array if no node exist
  if (node === null) return [];

  const currentNode = node.children ?? {};
  const keys = Object.keys(currentNode);

  // Return blank array if no child is there
  if (keys.length === 0) return [];

  return keys.map((v) => currentNode[v].data);
};

export { getNode, getChildren };
