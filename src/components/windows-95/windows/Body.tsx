import { useMemo } from "react";

import DataTree from "@/data/tree";
import Desktop from "./body/Desktop";
import { getNode } from "@/utils/tree-utils";

import backgroundImage from "@/assets/background.jpg";

const DESKTOP_PATH = "C:\\Windows\\Desktop";

function Body() {
  const data = useMemo(() => {
    return getNode(DESKTOP_PATH, DataTree);
  }, []);

  return (
    <section
      className="flex-center size-full flex-1"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Desktop data={data} />
    </section>
  );
}

export default Body;
