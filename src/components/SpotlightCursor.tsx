"use client";

import { useEffect, useState } from "react";

export default function SpotlightCursor() {
  const [coords, setCoords] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.10), transparent 40%)`,
        mixBlendMode: "overlay",
      }}
    />
  );
}


