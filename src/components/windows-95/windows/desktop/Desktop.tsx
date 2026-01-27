import useStore from "@/zustand/store";
import AppIcon from "../../common/AppIcon";
import backgroundImage from "@/assets/background.jpg";

function Desktop() {
  const { count, increment, decrement } = useStore((state) => state);

  return (
    <section
      className="size-full flex-1 px-2.5 py-2"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="size-full app-grid">
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
      </div>
    </section>
  );
}

export default Desktop;
