import React from "react";
import View from "./View";
import Button from "../common/Button";
import useStore from "@/zustand/store";
import explorerIcon from "@/assets/icons/explorer.png";
import { getAssetsUrl } from "@/lib/utils";

import type { Browser, FileExplorer } from "@/types/window";
import DoubleSeparator from "../common/DoubleSeparator";

interface IWindowLayoutProps {
  children: React.ReactNode;
  app: Browser | FileExplorer;
}

function Window({ children, app }: IWindowLayoutProps) {
  const { id, position, size, titleBar, type, state } = app;
  const { toggleAppState, handleCloseApp } = useStore((state) => state);

  return (
    <View style={{ transform: `translate(${position.x + 20}px, ${position.y + 20}px)` }}>
      <div
        style={{
          height: size.height,
          width: size.width,
        }}
        className="flex h-100! min-h-(--window-titlebar-height) min-w-96 flex-col overflow-hidden select-none"
      >
        {/* NAV SECTION */}
        <div className="flex w-full shrink-0 flex-col">
          {/* TITLE BAR */}
          <div className="bg-navy-blue flex size-full max-h-(--window-titlebar-height) items-center justify-between px-1.5">
            {/* TITLE */}
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

          <div className="border-dark-gray mt-0.5 flex w-full shrink-0 flex-col border-2 bg-white">
            {/* MENU BAR */}
            <MenuBar />

            {/* TOOLBAR */}
            {type === "file-explorer" ? (
              <FileExplorerToolBar />
            ) : type === "browser" ? (
              <BrowserToolBar />
            ) : null}
          </div>
        </div>

        {/* Main Content Body */}
        <div className="border-dark-gray mt-1.5 h-full min-h-14 w-full flex-1 shrink-0 border-2">
          {children}
        </div>

        {/* FOOTER OF THE WINDOW */}
        <div className="h-6 w-full shrink-0 bg-yellow-500 text-xs">
          <p className="mx-auto">
            Footer of the window - You can add status information or other details here.
          </p>
        </div>
      </div>
    </View>
  );
}

function MenuBar() {
  return (
    <div className="font-ms-sans m-0.5 flex h-7 w-full items-center text-sm">
      <div className="bg-light-gray border-dark-gray mr-0.5 inline-block size-full flex-1 border-r-2 border-b-2 px-0.75 py-0.5">
        <div className="flex size-full items-center">
          <DoubleSeparator />
          <span className="mx-0.75 not-nth-of-type-2:ml-2 nth-of-type-2:ml-2.75">File</span>
          <span className="mx-0.75 not-nth-of-type-2:ml-2 nth-of-type-2:ml-2.75">Edit</span>
          <span className="mx-0.75 not-nth-of-type-2:ml-2 nth-of-type-2:ml-2.75">View</span>
          <span className="mx-0.75 not-nth-of-type-2:ml-2 nth-of-type-2:ml-2.75">Go</span>
          <span className="mx-0.75 not-nth-of-type-2:ml-2 nth-of-type-2:ml-2.75">Favorites</span>
          <span className="mx-0.75 not-nth-of-type-2:ml-2 nth-of-type-2:ml-2.75">Help</span>
        </div>
      </div>
      <span className="border-dark-gray mr-0.5 inline-block h-full w-10 border-b-2 bg-black p-1">
        <img src={explorerIcon} className="size-full object-contain" />
      </span>
    </div>
  );
}

function FileExplorerToolBar() {
  return (
    <div className="ml-0.5 w-full">
      <div className="bg-light-gray mr-0.5 mb-0.5 h-12 px-0.75 py-0.5">
        <DoubleSeparator />
        <ToolBarButton label="Back" iconPath="/icons/back.png" isDisable />
      </div>
      <div className="font-ms-sans ml-0.5 w-full text-sm font-normal">
        <div className="bg-light-gray mr-0.5 h-8 w-full px-0.75 py-0.5">
          <div className="flex size-full items-center gap-x-1">
            <DoubleSeparator />
            <div className="flex">
              <p>Address</p>
              <div>
                <input />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserToolBar() {
  return (
    <div className="font-ms-sans ml-0.5 w-full text-sm font-normal">
      <div className="bg-light-gray mr-0.5 h-8 w-full px-0.75 py-0.5">
        <div className="flex size-full items-center gap-x-1">
          <DoubleSeparator />
          <div className="flex">
            <p>Address</p>
            <div>
              <input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolBarButton({
  label,
  iconPath,
  isDisable = false,
}: {
  label: string;
  iconPath: string;
  isDisable?: boolean;
}) {
  return (
    <button disabled={isDisable} className="bg-blue-500">
      {label}
    </button>
  );
}

export default Window;
