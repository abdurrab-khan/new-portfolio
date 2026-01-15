import type { DataTreeType } from "@/types/data-tree";

const getNode = (path: string, tree: DataTreeType) => {
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

  return currentNode;
};

export { getNode };
