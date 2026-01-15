import { useMemo } from "react";
import Desktop from "./body/Desktop";
import { getNode } from "@/utils/tree-utils";
import DataTree from "@/data/tree";

const DESKTOP_PATH = "C:\\Windows\\Desktop";

function Body() {
  const data = useMemo(() => {
    return getNode(DESKTOP_PATH, DataTree);
  }, []);

  return (
    <section className="flex-center bg-yellow size-full">
      <Desktop data={data} />
    </section>
  );
}

export default Body;
