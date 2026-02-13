import { useEffect, useState } from "react";
import { useThrottler } from "@tanstack/react-pacer/throttler";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const setThrottleScreenSize = useThrottler(setScreenSize, {
    leading: true,
    trailing: true,
    wait: 1000,
  });

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setThrottleScreenSize.maybeExecute({ width, height });
    });

    // Get initial screen size
    observer.observe(document.body);

    return () => observer.disconnect();
  }, [setThrottleScreenSize]);

  return screenSize;
}

export default useScreenSize;
