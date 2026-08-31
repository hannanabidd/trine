"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function CalendlyButton({
  className,
  style,
  children,
  onClick,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const router = useRouter();

  const openPopup = useCallback(() => {
    onClick?.();

    if (!CALENDLY_URL) {
      router.push("/contact");
      return;
    }
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener");
    }
  }, [onClick, router]);

  return (
    <button type="button" className={className} style={style} onClick={openPopup}>
      {children}
    </button>
  );
}
