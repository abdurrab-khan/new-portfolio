import View from "../layout/View";
import Button from "./Button";

interface IAlertProps {
  title: string;
  message: string;
  onClose: () => void;
}

function Alert({ title, message, onClose }: IAlertProps) {
  return (
    <div className="pointer-events-auto fixed inset-0 z-9999999999999 flex items-center justify-center select-none">
      <View>
        <div className="bg-light-gray flex w-64 flex-col md:w-80">
          {/* TITLE BAR */}
          <div className="bg-navy-blue flex h-(--window-titlebar-height) w-full items-center justify-between">
            <div className="flex h-full flex-1 items-center gap-x-0.75 pl-1.5">
              <span className="font-ms-sans pt-0.5 text-xs text-white">{title}</span>
            </div>
            <div className="flex h-full items-center gap-x-2.5 py-1.25 pr-1.5">
              {/* CLOSE BUTTON */}
              <div className="h-full w-5">
                <Button
                  className="bg-light-gray flex max-h-4 items-center justify-center *:px-0"
                  onClick={onClose}
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

          {/* BODY */}
          <div className="flex flex-col items-center p-4">
            <div className="mt-1 mb-6 flex w-full items-center gap-x-4">
              <div className="font-ms-sans w-full text-start text-xs leading-relaxed wrap-break-word">
                {message}
              </div>
            </div>
            <div className="h-6 w-20">
              <Button onClick={onClose} className="bg-light-gray font-ms-sans text-xs text-black">
                OK
              </Button>
            </div>
          </div>
        </div>
      </View>
    </div>
  );
}

export default Alert;
