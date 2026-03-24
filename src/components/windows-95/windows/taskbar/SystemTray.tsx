import { useEffect, useState } from "react";
import Separator from "../../common/Separator";
import soundIcon from "@/assets/icons/sound.png";

const formatTime = (date: Date) =>
  date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

function SystemTray() {
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    let minuteInterval: ReturnType<typeof setInterval> | null = null;
    let startTimeout: ReturnType<typeof setTimeout> | null = null;

    const updateTime = () => {
      setTime(formatTime(new Date()));
    };

    updateTime();

    // Align updates with real minute boundaries to avoid interval drift.
    const msUntilNextMinute = 60000 - (Date.now() % 60000);
    startTimeout = setTimeout(() => {
      updateTime();
      minuteInterval = setInterval(updateTime, 60000);
    }, msUntilNextMinute);

    return () => {
      if (startTimeout) clearTimeout(startTimeout);
      if (minuteInterval) clearInterval(minuteInterval);
    };
  }, []);

  return (
    <div className="flex h-full w-max items-center gap-x-2 select-none">
      <Separator />
      <div className="relative h-full w-max">
        {/* BORDER */}
        <span className="after:border-dark-gray before:absolute before:top-0 before:left-0 before:h-full before:w-full before:border-r-2 before:border-b-2 before:border-white after:absolute after:top-0 after:left-0 after:h-full after:w-full after:border-t-2 after:border-l-2" />

        <div className="flex size-full items-center justify-start gap-x-1 px-2">
          <div className="h-[60%]">
            <img src={soundIcon} className="size-full object-contain" />
          </div>
          <span className="font-ms-sans-bold font-light!">{time}</span>
        </div>
      </div>
    </div>
  );
}

export default SystemTray;
