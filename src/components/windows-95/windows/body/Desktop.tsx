interface IDesktopProps {
  data: any | null;
}

function Desktop({ data }: IDesktopProps) {
  return (
    <div>
      <h1>This is the desktop component.</h1>
    </div>
  );
}

export default Desktop;
