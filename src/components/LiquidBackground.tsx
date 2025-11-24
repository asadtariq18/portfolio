"use client";

import { useEffect, useRef } from "react";

export default function LiquidBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      container.style.setProperty("--tilt-x", `${x}`);
      container.style.setProperty("--tilt-y", `${y}`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        transform:
          "translate3d(calc(var(--tilt-x, 0px) * 1px), calc(var(--tilt-y, 0px) * 1px), 0)",
        transition: "transform 300ms ease-out",
      }}
    >
      <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.30),transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.22),transparent_60%)] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-40 left-1/3 h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.25),transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_60%)] animate-blob animation-delay-4000" />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_50%_120%,rgba(255,255,255,0.35),transparent_60%)] dark:bg-[radial-gradient(1000px_circle_at_50%_-20%,rgba(255,255,255,0.06),transparent_60%)]" />
    </div>
  );
}


