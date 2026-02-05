import { useEffect, useState } from 'react';
import Separator from '../../common/Separator';
import soundIcon from "@/assets/icons/sound.png";

function SystemTray() {
  const [date, setDate] = useState<{ hour: string, minute: string }>({ hour: '00', minute: '00' })

  const updateTime = () => {
    const date = new Date(Date.now());
    setDate(() => ({
      hour: date.getHours().toString(),
      minute: date.getMinutes().toString()
    }));
  }

  useEffect(() => {
    updateTime();

    const interval = setInterval(() => {
      updateTime();
    }, 60000);

    return () => {
      clearInterval(interval);
    }
  }, [])

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
            {
              `${date.hour}:${date.minute}`
            }
          </span>
        </div>
      </div>
    </div>
  )
}

export default SystemTray; 