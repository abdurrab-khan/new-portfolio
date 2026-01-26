import Separator from '../../common/Separator';
import soundIcon from "@/assets/icons/sound-icon.png";

function SystemTray() {
  return (
    <div className="h-full w-max flex select-none items-center gap-x-2">
      <Separator />
      <div className="w-max h-full relative">
        {/* BORDER */}
        <span className='after:absolute after:top-0 after:left-0 after:h-full after:w-full after:border-t-2 after:border-l-2 after:border-dark-gray before:absolute before:top-0 before:left-0 before:h-full before:w-full before:border-r-2 before:border-b-2 before:border-white' />

        <div className="flex items-center gap-x-1 size-full justify-start px-2">
          <div className='h-[60%]'>
            <img src={soundIcon} className='size-full object-contain' />
          </div>
          <span className='font-ms-sans-bold font-light!'>
            3:45 PM
          </span>
        </div>
      </div>
    </div>
  )
}

export default SystemTray; 