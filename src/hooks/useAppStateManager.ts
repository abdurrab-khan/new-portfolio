import React, { useEffect } from "react";

function useAppStateManager() {
  useEffect(() => {
    const handleVisibilityChange = (evt: Event) => {
      console.log("Visibility changed:", evt.target);
    };

    document.addEventListener("click", handleVisibilityChange);

    return () => {
      document.removeEventListener("click", handleVisibilityChange);
    };
  }, []);
}

export default useAppStateManager;
