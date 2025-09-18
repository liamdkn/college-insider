"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  children: React.ReactNode;
  // optional: offset from the anchor
  offsetY?: number;
  offsetX?: number;
};

export default function Popover({
  open,
  anchorEl,
  onClose,
  children,
  offsetY = 8,
  offsetX = 0,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape or outside click
  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    function onDocClick(e: MouseEvent) {
      const t = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(t) &&
        anchorEl &&
        !anchorEl.contains(t)
      ) {
        onClose();
      }
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [open, onClose, anchorEl]);

  if (!open || !anchorEl) return null;

  // Calculate position relative to the anchor
  const rect = anchorEl.getBoundingClientRect();
  const top = rect.bottom + offsetY + window.scrollY;
  const left = rect.left + offsetX + window.scrollX;

  return createPortal(
    <div
    ref={panelRef}
    role="menu"
    className="absolute z-50 w-80 max-h-72 overflow-auto rounded-md border bg-white shadow-lg text-black"
    style={{ top, left }}
    >
    {children}
    </div>,
    document.body
  );
}