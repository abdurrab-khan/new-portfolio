import Separator from '@/components/windows-95/common/Separator'
import View from '@/components/windows-95/layout/View'

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
            <div className="flex h-56 w-40">
                <div className="bg-dark-gray relative flex h-full w-8">
                    <p className="text-light-gray absolute right-1/2 bottom-6 translate-x-1/2 rotate-270 text-2xl font-bold">
                        MyOS
                    </p>
                </div>
                <div className="size-full flex flex-col items-start justify-end">
                    <Separator type="horizontal" />
                    <div className="w-full h-8 bg-blue-500"></div>
                </div>
            </div>
        </View>
    )
}

export default StartPopover