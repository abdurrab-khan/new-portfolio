import folderIcon from '@/assets/icons/folder-icon.png';

function AppIcon() {
    const handleAppClick = () => {
        // Logic to handle on click
    }

    return (
        <button
            onClick={handleAppClick}
            className='win95-icon flex group flex-col items-center select-none gap-y-2 max-w-20 border-0 outline-none focus:outline-none focus:ring-0 justify-start'
        >
            <div className='win95-icon-checker h-8 w-8'>
                <img src={folderIcon} className='size-full object-fill' />
            </div>
            <div className="w-full group-focus:border-2 group-focus:border-dashed border-yellow group-focus:bg-navy-blue group-focus:text-white max-h-[36px] text-center leading-[18px] overflow-hidden">
                <span className="font-ms-sans overflow-hidden text-ellipsis wrap-break-word [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                    My folder
                </span>
            </div>
        </button>
    )
}

export default AppIcon