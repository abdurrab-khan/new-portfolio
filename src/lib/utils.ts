import { extendTailwindMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

/**
 * Custom tailwind-merge configuration that includes custom border widths
 */
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "border-w": ["border-thick"],
      "border-w-x": ["border-r-thick", "border-l-thick"],
      "border-w-y": ["border-t-thick", "border-b-thick"],
      "border-w-t": ["border-t-thick"],
      "border-w-r": ["border-r-thick"],
      "border-w-b": ["border-b-thick"],
      "border-w-l": ["border-l-thick"],
    },
  },
});

/**
 * Utility function to merge class names using clsx and twMerge.
 * @param inputs {ClassValue[]} - An array of class names or objects to be merged.
 * @returns {string} - A string representing the merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}

/**
 * Cache all assets in the assets folder to make them available in the production build
 */
const assets = import.meta.glob("../assets/**/*", { eager: true, import: "default" });

/**
 * Utility function that resolve assets path from given path
 */
export function getAssetsUrl(path: string) {
  const assetPath = `../assets${path}`;
  if (assets[assetPath]) {
    return assets[assetPath] as string;
  }

  // Fallback to URL constructor for missing or runtime evaluated paths
  return new URL(assetPath, import.meta.url).href;
}
