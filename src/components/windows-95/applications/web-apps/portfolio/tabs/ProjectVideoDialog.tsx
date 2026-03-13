import BorderContainer from "../../../../common/BorderContainer";
import Button from "../../../../common/Button";

interface ProjectVideoDialogProps {
  title: string;
  videoPath: string;
  onClose: () => void;
}

function ProjectVideoDialog({ title, videoPath, onClose }: ProjectVideoDialogProps) {
  return (
    <div
      className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 p-2"
      onClick={onClose}
    >
      <div className="w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
        <BorderContainer className="bg-white p-3 shadow-md">
          <div className="mb-3 flex items-center justify-between gap-3 border-b border-gray-300 pb-2">
            <h3 className="text-sm font-bold text-purple-900">{title} Preview</h3>
            <div className="h-7 w-18">
              <Button type="button" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
          <video className="w-full bg-black" controls autoPlay muted loop playsInline>
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </BorderContainer>
      </div>
    </div>
  );
}

export default ProjectVideoDialog;
