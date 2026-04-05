import type { WindowContent } from "@/types/window";
import DoubleBorderView from "../DoubleBorderView";
import myComputerIcon from "@/assets/icons/my-computer.png";

const randomFileSize = (contentLength: number) => {
  const size = contentLength * 1024 * 10; // Random size based on content length

  if (size < 1024) {
    return `${size} bytes`;
  } else if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(2)} KB`;
  } else if (size < 1024 * 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  } else {
    return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  }
};

function Footer({
  type,
  state,
  resizerRef,
  contentLength,
}: {
  contentLength?: number;
  type: WindowContent["type"];
  state: WindowContent["state"];
  resizerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="font-ms-sans mt-1 flex h-6 w-full shrink-0 items-center gap-x-0.75 text-xs font-light">
      {type === "file-explorer" && (
        <>
          <DoubleBorderView>
            <span>{contentLength !== undefined ? contentLength : "0"} object(s)</span>
          </DoubleBorderView>
          <DoubleBorderView>
            <span>{contentLength !== undefined ? randomFileSize(contentLength) : "0 bytes"}</span>
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
        {state !== "full" && (
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
        )}
      </DoubleBorderView>
    </div>
  );
}

export default Footer;
