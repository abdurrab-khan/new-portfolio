import type { AppType } from "@/types/window";
import DoubleBorderView from "../DoubleBorderView";
import myComputerIcon from "@/assets/icons/my-computer.png";

function Footer({
  type,
  resizerRef,
}: {
  type: AppType;
  resizerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="font-ms-sans mt-1 flex h-6 w-full shrink-0 items-center gap-x-0.75 text-xs font-light">
      {type === "file-explorer" && (
        <>
          <DoubleBorderView>
            <span>0 object(s)</span>
          </DoubleBorderView>
          <DoubleBorderView>
            <span>0 bytes</span>
          </DoubleBorderView>
        </>
      )}
      <DoubleBorderView className="pr-0!">
        {type === "file-explorer" && (
          <>
            <span className="size-3.75">
              <img src={myComputerIcon} className="size-full object-contain" />
            </span>
            <span className="ml-1 text-xs">My Computer</span>
          </>
        )}

        {/* WINDOW RESIZER */}
        <div ref={resizerRef} className="ml-auto h-full w-5 cursor-nw-resize">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="size-full">
            {/* Shadow lines (dark) */}
            <line x1="13" y1="16" x2="16" y2="13" stroke="#808080" strokeWidth="1" />
            <line x1="9" y1="16" x2="16" y2="9" stroke="#808080" strokeWidth="1" />
            <line x1="5" y1="16" x2="16" y2="5" stroke="#808080" strokeWidth="1" />

            {/* Highlight lines (white) */}
            <line x1="12" y1="16" x2="16" y2="12" stroke="white" strokeWidth="1" />
            <line x1="8" y1="16" x2="16" y2="8" stroke="white" strokeWidth="1" />
            <line x1="4" y1="16" x2="16" y2="4" stroke="white" strokeWidth="1" />
          </svg>
        </div>
      </DoubleBorderView>
    </div>
  );
}

export default Footer;
