import type { App } from "@/types/app";
import type { WindowContent } from "@/types/window";

// Function to get a random size for the window, ensuring it's not too small or too large
const getRandomSize = (screenSize: number, maxSizePercentage: number = 50) => {
  const maxSize = (screenSize * maxSizePercentage) / 100;
  return Math.round(Math.random() * (maxSize - maxSize / 2)) + maxSize / 2;
};

// Function to get a random position for the window, ensuring it doesn't go off-screen
const getRandomPosition = (screenSize: number, windowSize: number) => {
  const maxSize = (screenSize * 80) / 100;
  return Math.round(Math.random() * (maxSize - windowSize)) + 20;
};

// Function to convert App data to WindowContent data when launching an app
const getAppData = (app: App, screenSize: { height: number; width: number }) => {
  const { name, type, address, iconPath } = app;

  // Determine the app type based on the icon type
  const appType =
    type === "folder"
      ? "file-explorer"
      : type === "image"
        ? "image-viewer"
        : type === "text"
          ? "text-editor"
          : "browser";

  // Create the window data based on the app data
  const windowData: WindowContent = {
    id: `${Date.now()}_${name.replace(" ", "").toLowerCase()}`,
    zIndex: 1,
    state: "open",
    type: appType,
    address,
    titleBar: {
      title: name,
      iconPath,
    },
    size: {
      height: Math.max(getRandomSize(screenSize.height), 400),
      width: Math.max(getRandomSize(screenSize.width), 550),
    },
    position: {
      x: 0,
      y: 0,
    },
  };

  // Randomly position the window on the screen, ensuring it doesn't go off-screen
  windowData.position = {
    x: getRandomPosition(screenSize.width, windowData.size.width),
    y: getRandomPosition(screenSize.height, windowData.size.height),
  };

  console.log("Launching app with data:", windowData);

  return windowData;
};

export { getAppData };
