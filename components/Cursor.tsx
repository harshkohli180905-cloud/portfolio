"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;

    const moveCursor = (e: MouseEvent) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden will-change-transform md:block"
    >
      <div className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-red-600/30 blur-lg" />

      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        className="relative drop-shadow-[0_0_6px_rgba(220,38,38,0.8)]"
      >
        <path
          d="M5 3L19 12L12 14L9 21L5 3Z"
          fill="#ff1a1a"
          stroke="white"
          strokeWidth="1.3"
        />
      </svg>
    </div>
  );
}
