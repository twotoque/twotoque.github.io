import { useEffect, useState } from "react";
import CustomButton from "./Button";

type ResponsiveEmbedProps =
  React.IframeHTMLAttributes<HTMLIFrameElement> & {
    preview?: string;
    href?: string;
  };

export default function ResponsiveEmbed({
  preview,
  href,
  height = 450,
  style,
  ...iframeProps
}: ResponsiveEmbedProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // MOBILE FALLBACK
  if (isMobile && preview && href) {
    return (
      <div style={{ width: "100%" }}>
        <img
          src={preview}
          alt={iframeProps.title ?? "Embedded preview"}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 8,
          }}
        />
        <div className="mt-2">
          <CustomButton
            href={href}
            label="Open interactive →"
          />
          </div>
      </div>
    );
  }

  // DESKTOP = EXACT iframe behavior
  return (
    <iframe
      {...iframeProps}
      height={height}
      style={{
        width: "100%",
        border: "none",
        ...style,
      }}
    />
  );
}
