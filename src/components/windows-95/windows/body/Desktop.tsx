import useStore from "@/zustand/store";
import ThreeDView from "../../common/ThreeDView";

interface IDesktopProps {
  data: any | null;
}

function Desktop({ data }: IDesktopProps) {
  const { count, increment, decrement } = useStore((state) => state);

  return (
    <div>
      <div className="h-48 w-28 bg-blue-500">
        <ThreeDView>
          <div>Hello world</div>
        </ThreeDView>
      </div>
    </div>
  );
}

export default Desktop;
