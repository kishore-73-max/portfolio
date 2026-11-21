"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Code2, Binary, Cpu, Info } from "lucide-react";

export function Skills() {
  const { t } = useLanguage();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-[#3D5AFE]" />;
      case "Binary":
        return <Binary className="w-5 h-5 text-[#00E5FF]" />;
      case "Cpu":
      default:
        return <Cpu className="w-5 h-5 text-[#8B5CFF]" />;
    }
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 sm:py-28 border-t border-[rgba(255,255,255,0.08)] bg-[#07080C] relative overflow-hidden"
    >
      {/* Static low-opacity radial glow (Skills: cyan 12-18%) */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[360px] bg-[#00E5FF]/14 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Giant outlined background word */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 select-none pointer-events-none text-outline font-display font-black text-[clamp(6rem,18vw,18rem)] tracking-tighter opacity-[0.06] whitespace-nowrap z-0"
        aria-hidden="true"
      >
        SKILLS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Big Type and Highlight */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-[#FFB547]">
            02 / CAPABILITY MATRIX
          </span>
          <h2
            id="skills-heading"
            className="font-display text-[clamp(2.5rem,6.5vw,6rem)] font-extrabold tracking-tight leading-[0.95] text-[#F4F5F9]"
          >
            Technical <span className="text-[#FFB547]">Inventory</span>
          </h2>
          <p className="text-[#9097AD] text-sm sm:text-base font-sans">
            {t.skills.sectionSubtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.skills.categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#11131C] border border-[rgba(255,255,255,0.08)] hover:border-[#00E5FF]/50 p-6 sm:p-7 shadow-lg flex flex-col justify-between transition-all hover:-translate-y-1 h-full relative group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#07080C] flex items-center justify-center border border-[rgba(255,255,255,0.08)] shadow-sm">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#F4F5F9] tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#FFB547] bg-[#FFB547]/10 px-2 py-0.5 rounded-full border border-[#FFB547]/30">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skills Labels - Discrete Labels */}
                <div className="space-y-2.5" role="list">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      role="listitem"
                      className="p-3 rounded-xl bg-[#07080C] border border-[rgba(255,255,255,0.06)] flex items-center justify-between gap-3 hover:border-[#3D5AFE]/40 transition-all"
                    >
                      <span className="font-mono font-medium text-xs sm:text-sm text-[#F4F5F9]">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#11131C] text-[#00E5FF] border border-[#00E5FF]/30 text-right shrink-0">
                        {skill.levelLabel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Indicator */}
              <div className="pt-5 mt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between text-[11px] font-mono text-[#9097AD]">
                <span>{cat.skills.length} competencies</span>
                <span className="text-[#3D5AFE]">proven hands-on</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note Callout */}
        <div className="mt-8 sm:mt-10 p-4 rounded-xl bg-[#11131C] border border-[rgba(255,255,255,0.08)] flex items-start sm:items-center gap-3 text-xs text-[#9097AD]">
          <Info className="w-4 h-4 text-[#FFB547] shrink-0 mt-0.5 sm:mt-0" />
          <p className="font-mono text-[11px]">{t.skills.note}</p>
        </div>
      </div>
    </section>
  );
}
