import React from "react";
import View from "./View";
import Button from "../common/Button";
import useStore from "@/zustand/store";
import { getAssetsUrl } from "@/lib/utils";

import type { Browser, FileExplorer } from "@/types/window";

interface IWindowLayoutProps {
  children: React.ReactNode;
  app: Browser | FileExplorer;
}

function Window({ children, app }: IWindowLayoutProps) {
  const { id, position, size, titleBar, type } = app;
  const { toggleAppState, handleCloseApp } = useStore((state) => state);

  return (
    <View style={{ transform: `translate(${position.x + 20}px, ${position.y + 20}px)` }}>
      <div
        style={{
          height: size.height,
          width: size.width,
        }}
      >
        {/* NAV SECTION */}
        <div className="bg-navy-blue h-(--window-titlebar-height) w-full px-1.5">
          <div className="flex size-full items-center justify-between">
            {/* TITLE BAR */}
            <div className="flex items-center gap-x-0.75">
              <span className="size-3.75">
                <img src={getAssetsUrl(titleBar.iconPath)} className="size-full object-contain" />
              </span>
              <span className="font-ms-sans text-xs text-white">{titleBar.title}</span>
            </div>

            {/* MANAGE STATE */}
            <div className="flex h-full items-center gap-x-2.5 py-1.25">
              {(type === "browser" || type === "file-explorer") && (
                <>
                  {/* MINIMIZE BUTTON */}
                  <div className="h-full w-5">
                    <Button
                      className="bg-light-gray flex items-center justify-center *:px-0"
                      onClick={() => toggleAppState(id)}
                    >
                      <div className="flex size-full items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 10 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="size-3 text-black"
                        >
                          <line x1="2" y1="7" x2="8" y2="7"></line>
                        </svg>
                      </div>
                    </Button>
                  </div>

                  {/* TOGGLE FULL-SIZE BUTTON */}
                  <div className="h-full w-5">
                    <Button className="bg-light-gray flex items-center justify-center *:px-0">
                      <div className="flex size-full items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 10 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="size-3 text-black"
                        >
                          <rect x="2" y="2" width="6" height="6" rx="1" ry="1"></rect>
                        </svg>
                      </div>
                    </Button>
                  </div>
                </>
              )}

              {/* CLOSE BUTTON */}
              <div className="h-full w-5">
                <Button
                  className="bg-light-gray flex items-center justify-center *:px-0"
                  onClick={() => handleCloseApp(id)}
                >
                  <div className="flex size-full items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-3 text-black"
                    >
                      <line x1="2" y1="2" x2="8" y2="8"></line>
                      <line x1="8" y1="2" x2="2" y2="8"></line>
                    </svg>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Body */}
        <div>{children}</div>
      </div>
    </View>
  );
}

export default Window;
