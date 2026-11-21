"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, MapPin, Building2, Calendar, CheckCircle2 } from "lucide-react";

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28 border-t border-[rgba(255,255,255,0.08)] bg-[#0C0E16] relative overflow-hidden"
    >
      {/* Static low-opacity radial glow (About: violet 12-18%) */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[360px] bg-[#8B5CFF]/15 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Giant outlined background word */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 select-none pointer-events-none text-outline font-display font-black text-[clamp(6rem,18vw,18rem)] tracking-tighter opacity-[0.06] whitespace-nowrap z-0"
        aria-hidden="true"
      >
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header with Big Type and Highlight */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-[#FFB547]">
            01 / IDENTITY & ROOTS
          </span>
          <h2
            id="about-heading"
            className="font-display text-[clamp(2.5rem,6.5vw,6rem)] font-extrabold tracking-tight leading-[0.95] text-[#F4F5F9]"
          >
            About <span className="text-[#FFB547]">Me</span>
          </h2>
          <p className="text-[#9097AD] text-sm sm:text-base font-sans">
            {t.about.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#11131C] border border-[rgba(255,255,255,0.08)] shadow-2xl space-y-4">
              <p className="text-xl sm:text-2xl font-display font-medium leading-relaxed text-[#F4F5F9]">
                I am an Information Technology student passionate about{" "}
                <span className="highlight-amber">cybersecurity, software development & AI automation</span>.
                I enjoy exploring technology, solving problems, and building practical solutions.
              </p>
              <p className="text-sm sm:text-base text-[#9097AD] leading-relaxed font-sans">
                My ambition is{" "}
                <span className="highlight-amber">turning ideas into practical technology</span>,
                collaborating with talented engineers, and continuously mastering resilient systems.
              </p>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#FFB547] to-[#00E5FF] pt-1" />
            </div>

            {/* Core Mindset & Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {t.about.values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#11131C] border border-[rgba(255,255,255,0.08)] space-y-1.5 hover:border-[#8B5CFF]/50 transition-all"
                >
                  <div className="flex items-center gap-1.5 text-[#8B5CFF]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CFF] shrink-0" />
                    <h3 className="font-display font-semibold text-xs text-[#F4F5F9]">
                      {val.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-[#9097AD] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Framed Portrait Photo (Nothing overlaps the photo) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#11131C] border border-[#00E5FF]/40 shadow-2xl shadow-[#3D5AFE]/15">
              <Image
                src="/images/kishore.jpg"
                alt="Satya Kishore Gollapalli portrait"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                style={{ objectPosition: "center 15%" }}
              />
            </div>

            {/* Academic Badges cleanly below the photo */}
            <div className="p-4 rounded-xl bg-[#11131C] border border-[rgba(255,255,255,0.08)] grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span className="text-[#F4F5F9] line-clamp-1">VIT Bhimavaram</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#3D5AFE] shrink-0" />
                <span className="text-[#F4F5F9]">IT Dept</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FFB547] shrink-0" />
                <span className="text-[#FFB547]">Grad 2029</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8B5CFF] shrink-0" />
                <span className="text-[#9097AD]">Andhra Pradesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
