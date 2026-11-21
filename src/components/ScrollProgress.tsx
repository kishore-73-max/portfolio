"use client";

import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "HERO" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "achievements", label: "HONORS" },
  { id: "journey", label: "TRAJECTORY" },
  { id: "contact", label: "CONTACT" },
];

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);

      // Determine active section by measuring offsets
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sec = document.getElementById(SECTIONS[i].id);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentNum = String(activeSectionIndex + 1).padStart(2, "0");
  const totalNum = String(SECTIONS.length).padStart(2, "0");

  return (
    <>
      {/* Top Thin Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none bg-gradient-to-r from-[#3D5AFE] via-[#00E5FF] to-[#3D5AFE] origin-left"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
          transition: "transform 0.05s ease-out",
        }}
        aria-hidden="true"
      />

      {/* Fixed Side Section Counter (01/07) */}
      <div
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 pointer-events-none select-none font-mono"
        aria-hidden="true"
      >
        <span className="text-[10px] text-[#00E5FF] font-bold tracking-widest">
          {currentNum}
        </span>
        <div className="w-[1px] h-10 bg-[rgba(255,255,255,0.08)] relative overflow-hidden">
          <div
            className="w-full bg-[#00E5FF] absolute top-0"
            style={{
              height: `${((activeSectionIndex + 1) / SECTIONS.length) * 100}%`,
              transition: "height 0.3s ease-out",
            }}
          />
        </div>
        <span className="text-[9px] text-[#8A8FA3]/60 tracking-wider">
          {totalNum}
        </span>
        <span className="text-[8px] uppercase tracking-widest text-[#8A8FA3] [writing-mode:vertical-rl] mt-1 opacity-70">
          {SECTIONS[activeSectionIndex]?.label}
        </span>
      </div>
    </>
  );
}

