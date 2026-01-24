import useStore from "@/zustand/store";
import View from "../../common/View";

interface IDesktopProps {
  data: any | null;
}

function Desktop({ data }: IDesktopProps) {
  const { count, increment, decrement } = useStore((state) => state);

  return (
    <View>
      <div className="h-52 w-96">
        <span>Hello world</span>
      </div>
    </View>
  );
}

export default Desktop;
