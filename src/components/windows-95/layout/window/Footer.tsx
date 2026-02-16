import DoubleBorderView from "../DoubleBorderView";

import myComputerIcon from "@/assets/icons/my-computer.png";

function Footer() {
  return (
    <div className="font-ms-sans mt-1 flex h-6 w-full shrink-0 items-center gap-x-0.75 text-xs font-light">
      <DoubleBorderView>
        <span>0 object(s)</span>
      </DoubleBorderView>
      <DoubleBorderView>
        <span>0 bytes</span>
      </DoubleBorderView>
      <DoubleBorderView>
        <span className="size-3.75">
          <img src={myComputerIcon} className="size-full object-contain" />
        </span>
        <span className="ml-1 text-xs">My Computer</span>
      </DoubleBorderView>
    </div>
  );
}

export default Footer;
