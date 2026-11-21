"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CurrentlyExploring() {
  const { t } = useLanguage();

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-20 sm:py-28 border-t border-[rgba(255,255,255,0.08)] bg-[#07080C] relative overflow-hidden"
    >
      {/* Static low-opacity radial glow (Journey: blue 12-18%) */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[360px] bg-[#3D5AFE]/15 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Giant outlined background word */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 select-none pointer-events-none text-outline font-display font-black text-[clamp(6rem,18vw,18rem)] tracking-tighter opacity-[0.06] whitespace-nowrap z-0"
        aria-hidden="true"
      >
        TRAJECTORY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Big Type and Highlight */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-[#FFB547]">
            05 / LEARNING ROADMAP
          </span>
          <h2
            id="journey-heading"
            className="font-display text-[clamp(2.5rem,6.5vw,6rem)] font-extrabold tracking-tight leading-[0.95] text-[#F4F5F9]"
          >
            Career <span className="text-[#FFB547]">Trajectory</span>
          </h2>
          <p className="text-[#9097AD] text-sm sm:text-base font-sans">
            {t.exploring.sectionSubtitle}
          </p>
        </div>

        {/* Roadmap Steps */}
        <div className="relative">
          {/* Subtle vertical track line */}
          <div
            className="hidden md:block absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#3D5AFE] via-[#00E5FF] to-[#FFB547] opacity-35 pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-6 sm:space-y-8 md:pl-16">
            {t.exploring.steps.map((item, idx) => (
              <div
                key={item.step}
                className="relative flex flex-col md:flex-row items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-[#11131C] border border-[rgba(255,255,255,0.08)] hover:border-[#FFB547]/50 shadow-xl transition-all group"
              >
                {/* Step Node Marker with Amber Accent */}
                <div className="flex items-center gap-3 md:flex-col md:items-center shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#07080C] border border-[#FFB547]/40 flex items-center justify-center font-mono font-bold text-sm sm:text-base text-[#FFB547] shadow-md transition-all group-hover:border-[#FFB547] group-hover:shadow-[0_0_15px_rgba(255,181,71,0.25)]">
                    {String(item.step).padStart(2, "0")}
                  </div>
                  <span className="font-mono text-[10px] uppercase font-medium px-2 py-0.5 rounded bg-[#07080C] text-[#9097AD] border border-[rgba(255,255,255,0.06)] md:mt-2">
                    {item.statusLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F4F5F9] tracking-tight group-hover:text-[#FFB547] transition-colors">
                      {item.title}
                    </h3>
                    {idx < t.exploring.steps.length - 1 && (
                      <ArrowRight className="hidden lg:inline-block w-4 h-4 text-[#9097AD]" />
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#9097AD] leading-relaxed max-w-3xl font-sans">
                    {item.description}
                  </p>

                  {/* Sub-topics explored */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.topics.map((top, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#07080C] border border-[rgba(255,255,255,0.06)] text-[10px] text-[#9097AD]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#00E5FF]" />
                        <span>{top}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
