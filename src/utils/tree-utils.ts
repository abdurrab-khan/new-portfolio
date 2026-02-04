import DataTree from "@/data/tree";
import type { DataTreeType, NodeData } from "@/types/data-tree";

const getNode = (path: string, tree: DataTreeType = DataTree) => {
  const segments = path
    .toLowerCase()
    .split("\\")
    .filter((s) => s.length > 0)
    .map((s) => s.replace(":", ""));

  let currentNode = tree;

  for (const segment of segments) {
    const nextNode = currentNode[segment];

    if (!nextNode) return null;

    if (nextNode.children) {
      currentNode = nextNode.children;
    } else {
      return segments.indexOf(segment) === segments.length - 1 ? nextNode : null;
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
