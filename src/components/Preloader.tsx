"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getPreloaderActiveSnapshot() {
  if (typeof window === "undefined") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getPreloaderActiveServerSnapshot() {
  return false;
}

export function Preloader() {
  const isEligible = useSyncExternalStore(
    subscribeReducedMotion,
    getPreloaderActiveSnapshot,
    getPreloaderActiveServerSnapshot
  );

  const [complete, setComplete] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!isEligible) return;

    // Quick, executive reveal under 1.6 seconds
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1100);

    const completeTimer = setTimeout(() => {
      setComplete(true);
    }, 1600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [isEligible]);

  if (!isEligible || complete) return null;

  return (
    <div
      className={`fixed inset-0 z-[110] bg-[#050507] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Loading site"
      role="status"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Monogram Badge */}
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-[#0D0E14] border border-[#3D5AFE]/50 flex items-center justify-center shadow-xl shadow-[#3D5AFE]/20 animate-pulse">
            <span className="font-display font-extrabold text-2xl text-gradient-accent tracking-tighter">
              SK
            </span>
          </div>
        </div>

        {/* Name Reveal */}
        <div className="space-y-1 text-center">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#8A8FA3]">
            SATYA KISHORE GOLLAPALLI
          </span>
          <div className="w-36 h-[2px] bg-[#0D0E14] overflow-hidden rounded-full mx-auto">
            <div className="w-full h-full gradient-accent animate-[marquee_1.4s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}
