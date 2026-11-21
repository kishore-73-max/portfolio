"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";

function subscribeCursor(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getCursorEnabledSnapshot() {
  if (typeof window === "undefined") return false;
  const hasTouch = window.matchMedia("(pointer: coarse)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return !hasTouch && !prefersReducedMotion;
}

function getCursorEnabledServerSnapshot() {
  return false;
}

export function CustomCursor() {
  const isEnabled = useSyncExternalStore(
    subscribeCursor,
    getCursorEnabledSnapshot,
    getCursorEnabledServerSnapshot
  );

  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isEnabled) return;

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest('[role="button"]') ||
        target?.tagName === "INPUT"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isEnabled]);

  // Smooth lerp trailing circle
  useEffect(() => {
    if (!isEnabled) return;

    let animationId: number;
    const lerp = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animationId = requestAnimationFrame(lerp);
    };

    animationId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animationId);
  }, [pos, isEnabled]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Precision Center Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[100] w-1.5 h-1.5 bg-[#00E5FF] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
        aria-hidden="true"
      />

      {/* Trailing Responsive Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[99] rounded-full border border-[#3D5AFE]/60 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          isHovered
            ? "w-11 h-11 bg-[#3D5AFE]/10 border-[#00E5FF] scale-110"
            : "w-6 h-6 scale-100"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
        aria-hidden="true"
      />
    </>
  );
}
