import shutdownIcon from "@/assets/icons/shutdown.png";
import View from "@/components/windows-95/layout/View";
import { AnimatePresence, motion } from "motion/react";

function StartPopover() {
  return (
    <View
      id="start-popover"
      popover="auto"
      style={{
        positionAnchor: "--start-btn-anchor",
        inset: "unset",
        bottom: "calc(anchor(top) + 0.10rem)",
        left: "anchor(left)",
      }}
    >
      <div className="flex h-56 w-40 gap-x-0.75">
        <div className="bg-dark-gray flex h-full w-8 items-end justify-center pb-2">
          <p
            className="text-light-gray text-2xl font-bold tracking-wider"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            MyOS
          </p>
        </div>
        <div className="flex size-full flex-col justify-end p-0.5 pb-1">
          <div className="group flex w-full cursor-pointer items-center gap-2 p-1.5 text-black outline-none hover:bg-[#000080] hover:text-white">
            <img src={shutdownIcon} className="h-4" />
            <div className="font-ms-sans text-sm leading-none font-light whitespace-nowrap">
              <span className="underline decoration-black group-hover:decoration-white">S</span>hut
              Down...
            </div>
          </div>
        </div>
        <StartShutdownProcess startShutdown={false} />
      </div>
    </View>
  );
}

function StartShutdownProcess({ startShutdown }: { startShutdown: boolean }) {
  return (
    <AnimatePresence>
      {startShutdown && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="size-screen fixed top-0 right-0 z-[999999999999999999999] bg-red-500"
        >
          <div className="flex size-full items-center justify-center">
            <p className="text-4xl font-bold text-white">Shutting Down...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StartPopover;
