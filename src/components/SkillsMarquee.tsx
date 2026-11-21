"use client";

import React from "react";

export function SkillsMarquee() {
  const marqueeItems = [
    { text: "CYBERSECURITY", isAmber: false, outline: true },
    { text: "•", isAmber: true, outline: false },
    { text: "SOFTWARE", isAmber: true, outline: true },
    { text: "•", isAmber: false, outline: false },
    { text: "AI AUTOMATION", isAmber: false, outline: true },
    { text: "•", isAmber: true, outline: false },
    { text: "THREAT DEFENSE", isAmber: true, outline: true },
    { text: "•", isAmber: false, outline: false },
    { text: "SYSTEM ARCHITECTURE", isAmber: false, outline: true },
    { text: "•", isAmber: true, outline: false },
  ];

  const fullItems = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="w-full border-y border-[rgba(255,255,255,0.08)] bg-[#0C0E16]/80 py-4 sm:py-6 overflow-hidden select-none relative z-20 shadow-inner"
      aria-hidden="true"
    >
      <div className="animate-marquee flex items-center gap-8 sm:gap-12 whitespace-nowrap font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-widest uppercase">
        {fullItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 sm:gap-12 shrink-0">
            {item.text === "•" ? (
              <span className={item.isAmber ? "text-[#FFB547]" : "text-[#00E5FF]"}>
                •
              </span>
            ) : (
              <span
                className={
                  item.isAmber
                    ? "text-outline-amber hover:text-[#FFB547] transition-colors"
                    : "text-outline hover:text-[#F4F5F9] transition-colors"
                }
              >
                {item.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
