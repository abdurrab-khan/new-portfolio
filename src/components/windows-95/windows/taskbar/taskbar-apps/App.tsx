import Button from "@/components/windows-95/common/Button";
import folderIcon from "@/assets/icons/taskbar-folder-icon.png";

function App() {
    return (
        <div className="h-full min-w-40">
            <Button mainStyle="bg-checkerboard">
                <div className="flex h-full items-center gap-x-0.5 p-1 font-semibold overflow-hidden">
                    <img src={folderIcon} className="h-full" />
                    <span className="ml-1 font-ms-sans-bold truncate">My Computer</span>
                </div>
            </Button>
        </div>
    );
};


export default App;