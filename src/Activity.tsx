import type { ReactNode } from "react";
import { useEffect } from "react";

interface ActivityProps {
  children: ReactNode;
}

export default function Activity({ children }: ActivityProps) {
  useEffect(() => {
    const fonts = (document as unknown as { fonts?: { ready: Promise<unknown> } }).fonts;
    fonts?.ready?.catch(() => {});

    const t = window.setTimeout(() => {
      const imgs = Array.from(document.images);
      for (const img of imgs) {
        if (img.complete) {
          img.decode?.().catch(() => {});
        } else {
          img.addEventListener(
            "load",
            () => {
              img.decode?.().catch(() => {});
            },
            { once: true },
          );
        }
      }
    }, 0);

    return () => window.clearTimeout(t);
  }, []);

  return <>{children}</>;
}

