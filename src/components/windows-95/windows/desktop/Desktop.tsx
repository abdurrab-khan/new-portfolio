import OpenedApps from "./OpenedApps";
import DesktopApps from "./DesktopApps";
import backgroundImage from "@/assets/background.jpg";

function Desktop() {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="relative size-full flex-1 px-2 py-4"
    >
      <DesktopApps />
      <OpenedApps />
    </section>
  );
}

export default Desktop;
