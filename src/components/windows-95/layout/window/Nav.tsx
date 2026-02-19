import React from "react";

import Button from "../../common/Button";
import Separator from "../../common/Separator";
import DoubleSeparator from "../../common/DoubleSeparator";
import explorerIcon from "@/assets/icons/explorer.png";

import useStore from "@/zustand/store";
import { getAssetsUrl } from "@/lib/utils";

import type { AppType } from "@/types/window";

interface INavProps {
  id: string;
  type: AppType;
  address: string;
  navRef: React.RefObject<HTMLDivElement | null>;
  titleBar: {
    title: string;
    iconPath: string;
  };
}

function Nav({ id, type, address, titleBar, navRef }: INavProps) {
  const { toggleAppState, toggleAppSize, handleCloseApp } = useStore((state) => state);

  return (
    <div className="flex w-full shrink-0 flex-col">
      {/* TITLE BAR */}
      <div className="bg-navy-blue flex size-full max-h-(--window-titlebar-height) items-center justify-between">
        <div
          className="flex size-full flex-1 cursor-grab items-center gap-x-0.75 pl-1.5 active:cursor-grabbing"
          ref={navRef}
        >
          <span className="size-3.75">
            <img src={getAssetsUrl(titleBar.iconPath)} className="size-full object-contain" />
          </span>
          <span className="font-ms-sans text-xs text-white">{titleBar.title}</span>
        </div>
        <div className="flex h-full items-center gap-x-2.5 py-1.25 pr-1.5">
          {type !== "alert" && (
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
                <Button
                  className="bg-light-gray flex items-center justify-center *:px-0"
                  onClick={() => toggleAppSize(id)}
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

      {/* MENU BAR & TOOLBAR */}
      <div className="border-dark-gray mt-0.5 flex w-full shrink-0 flex-col border-2 bg-white">
        <MenuBar />
        <ToolBar address={address} type={type} />
      </div>
    </div>
  );
}

function MenuBar() {
  return (
    <div className="font-ms-sans m-0.5 flex h-7 w-full items-center text-sm">
      <div className="bg-light-gray border-dark-gray mr-0.5 inline-block size-full flex-1 border-r-2 border-b-2 px-0.75 py-0.5">
        <div className="flex size-full items-center">
          <DoubleSeparator />
          {["File", "Edit", "View", "Go", "Favorites", "Help"].map((menu) => (
            <span key={menu} className="mx-0.75 not-nth-of-type-2:ml-3 nth-of-type-2:ml-2.75">
              {menu}
            </span>
          ))}
        </div>
      </div>
      <span className="border-dark-gray mr-0.5 inline-block h-full w-10 border-b-2 bg-black p-1">
        <img src={explorerIcon} className="size-full object-contain" />
      </span>
    </div>
  );
}

function ToolBar({ type, address }: { type: AppType; address: string }) {
  return (
    <div className="w-full border-2 border-t-0 border-white">
      {/* TOOLBAR */}
      {type === "file-explorer" && (
        <div className="bg-light-gray mb-0.5 flex h-12 items-center gap-x-0.75 px-0.75">
          <span className="inline-block h-full py-0.5">
            <DoubleSeparator />
          </span>
          <div className="flex h-full items-center gap-x-0.75">
            <ToolBarButton label="Back" iconPath={getAssetsUrl("/icons/drive.png")} />
            <ToolBarButton label="Back" iconPath={getAssetsUrl("/icons/drive.png")} />

            {/* SEPARATOR */}
            <span className="inline-block h-full w-fit py-1">
              <Separator />
            </span>

            <ToolBarButton label="Back" iconPath={getAssetsUrl("/icons/drive.png")} />
          </div>
        </div>
      )}

      {/* Address Bar */}
      <div className="font-ms-sans w-full text-sm font-normal">
        <div className="bg-light-gray h-8 w-full px-0.75">
          <div className="flex size-full items-center gap-x-1">
            <span className="inline-block h-full py-0.5">
              <DoubleSeparator />
            </span>
            <div className="flex h-full w-full flex-1 items-center gap-x-0.5">
              <p>Address</p>
              <div className="relative mr-0.75 ml-1.75 flex h-full w-full flex-1 items-center gap-x-1">
                {/* BORDER */}
                <span className="border-dark-gray pointer-events-none absolute inset-0 size-full border-t-2 border-l-2 bg-transparent" />
                <span className="pointer-events-none absolute inset-0 size-full border-r-2 border-b-2 border-white bg-transparent" />

                <span className="inline-block h-full px-1 py-1.75">
                  <img
                    src={getAssetsUrl(
                      `${type === "file-explorer" ? "/icons/folder.png" : "/icons/explorer.png"}`,
                    )}
                    className="size-full object-contain"
                  />
                </span>
                <input
                  value={address}
                  className="size-full border-none font-normal ring-0 outline-none"
                />
              </div>
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
    <button
      disabled={isDisable}
      className="group relative h-full w-12 shrink-0 border-0 bg-transparent py-1 ring-0 outline-none"
    >
      <span className="group-hover:border-dark-gray pointer-events-auto absolute inset-0 size-full bg-transparent group-hover:border-t-2 group-hover:border-l-2 group-active:border-white" />
      <span className="group-active:border-dark-gray pointer-events-auto absolute inset-0 size-full bg-transparent group-hover:border-r-2 group-hover:border-b-2 group-hover:border-white" />
      <div className="flex size-full flex-col gap-y-0.5">
        <span className="inline-block size-full flex-1 px-2">
          <img src={iconPath} className="size-full object-contain" />
        </span>
        <span className="font-ms-sans text-xs leading-3">{label}</span>
      </div>
    </button>
  );
}

export default Nav;
