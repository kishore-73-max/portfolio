"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Award, Trophy, Users, Lightbulb, ShieldCheck } from "lucide-react";

export function Achievements() {
  const { t } = useLanguage();

  const getAchievementIcon = (id: string) => {
    switch (id) {
      case "sih":
        return <Trophy className="w-5 h-5 text-[#FFB547]" />;
      case "iot-workshop":
        return <Award className="w-5 h-5 text-[#00E5FF]" />;
      case "student-leadership":
        return <Users className="w-5 h-5 text-[#3D5AFE]" />;
      case "ai-automation-dev":
      default:
        return <Lightbulb className="w-5 h-5 text-[#8B5CFF]" />;
    }
  };

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="py-20 sm:py-28 border-t border-[rgba(255,255,255,0.08)] bg-[#0C0E16] relative overflow-hidden"
    >
      {/* Static low-opacity radial glow (Achievements: amber 12-18%) */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[360px] bg-[#FFB547]/14 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Giant outlined background word */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 select-none pointer-events-none text-outline font-display font-black text-[clamp(6rem,18vw,18rem)] tracking-tighter opacity-[0.06] whitespace-nowrap z-0"
        aria-hidden="true"
      >
        HONORS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Big Type and Highlight */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-[#FFB547]">
            04 / HONORS & MILESTONES
          </span>
          <h2
            id="achievements-heading"
            className="font-display text-[clamp(2.5rem,6.5vw,6rem)] font-extrabold tracking-tight leading-[0.95] text-[#F4F5F9]"
          >
            Honors & <span className="text-[#FFB547]">Milestones</span>
          </h2>
          <p className="text-[#9097AD] text-sm sm:text-base font-sans">
            {t.achievements.sectionSubtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.achievements.items.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#11131C] border border-[rgba(255,255,255,0.08)] hover:border-[#FFB547]/50 shadow-xl flex flex-col justify-between space-y-5 transition-all hover:-translate-y-1 h-full"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#07080C] border border-[rgba(255,255,255,0.08)] flex items-center justify-center shrink-0">
                    {getAchievementIcon(item.id)}
                  </div>
                  <span className="font-mono text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full bg-[#07080C] border border-[#FFB547]/40 text-[#FFB547]">
                    {item.highlightBadge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#9097AD]">
                    {item.organization} • {item.type}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#F4F5F9] tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[#9097AD] text-xs sm:text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center gap-2 text-[11px] font-mono text-[#9097AD]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2EE6A6]" />
                <span>Verified milestone</span>
              </div>
            </div>
          ))}
        </div>

        {/* Strict Honesty Notice */}
        <div className="mt-8 text-center text-xs font-mono text-[#9097AD]/70">
          <p>{t.achievements.noDateNotice}</p>
        </div>
      </div>
    </section>
  );
}
