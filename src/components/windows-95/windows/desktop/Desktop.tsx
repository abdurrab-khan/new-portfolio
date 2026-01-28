import useStore from "@/zustand/store";
import AppIcon from "../../common/AppIcon";
import backgroundImage from "@/assets/background.jpg";

function Desktop() {
  const { count, increment, decrement } = useStore((state) => state);

  return (
    <section
      className="size-full flex-1 p-2"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="size-full app-grid">
        {
          Array(17).fill(0).map((_, idx) => <AppIcon key={idx} />)
        }
      </div>
    </section>
  );
}

export default Desktop;
