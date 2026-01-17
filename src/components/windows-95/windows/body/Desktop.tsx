import useStore from "@/zustand/store";

interface IDesktopProps {
  data: any | null;
}

function Desktop({ data }: IDesktopProps) {
  const { count, increment, decrement } = useStore((state) => state);

  return <div></div>;
}

export default Desktop;
