"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Terminal } from "@/components/Terminal";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import {
  ArrowRight,
  Compass,
  Mail,
  ShieldCheck,
  Cpu,
  Code2,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";

export function Hero() {
  const { t, data } = useLanguage();
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const hasGithub = Boolean(data.links.github && data.links.github.trim() !== "");

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] flex flex-col justify-center py-10 sm:py-16 lg:py-0 overflow-hidden bg-[#07080C] editorial-grid"
    >
      {/* Background Interactive Particle Field */}
      <ParticleCanvas />

      {/* Static low-opacity radial glow (Hero: blue + cyan, 12-18%) */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#3D5AFE]/15 to-[#00E5FF]/12 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Giant outlined background word */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-outline font-display font-black text-[clamp(6rem,18vw,18rem)] tracking-tighter opacity-[0.06] whitespace-nowrap z-0"
        aria-hidden="true"
      >
        BUILDER
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* 12-Column Grid: Left Column Text, Right Column Terminal Visual (No photo in Hero, no overlaps) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center py-6">
          
          {/* LEFT COLUMN: Name, Headline, Badges, Buttons (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 xl:space-y-5">
            {/* Status & College Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11131C] border border-[rgba(255,255,255,0.08)] shadow-sm text-xs font-mono text-[#9097AD]">
              <span className="w-2 h-2 rounded-full bg-[#FFB547] animate-pulse" />
              <span>{t.hero.badge}</span>
              <span className="text-[rgba(255,255,255,0.2)]">•</span>
              <span className="text-[#F4F5F9]">Vishnu Institute of Technology</span>
            </div>

            {/* Name on exactly 2 lines: "Satya Kishore" / "Gollapalli", clamp(3rem, 7vw, 7rem) */}
            <div className="space-y-1.5 w-full">
              <span className="block text-[11px] font-mono tracking-widest uppercase text-[#9097AD]">
                PORTFOLIO / 2026
              </span>
              <h1
                id="hero-heading"
                className="font-display font-extrabold tracking-tight text-gradient-accent leading-[0.92] select-none text-[clamp(3rem,6.8vw,7rem)] whitespace-normal"
              >
                <span className="block whitespace-nowrap">Satya Kishore</span>
                <span className="block whitespace-nowrap">Gollapalli</span>
              </h1>
              <p className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-[#F4F5F9] tracking-tight pt-1">
                Building at the intersection of <span className="text-[#FFB547]">Cybersecurity</span>, Software & AI.
              </p>
              <p className="font-mono text-xs sm:text-sm text-[#00E5FF] tracking-wide">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-[#9097AD] text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl font-sans">
              An IT student exploring security, developing scalable software, and{" "}
              <span className="highlight-amber">turning ideas into practical technology</span>.
            </p>

            {/* Micro Feature Badges */}
            <div className="flex flex-wrap gap-2 pt-0.5" aria-label="Core focus pillars">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#11131C] border border-[rgba(255,255,255,0.08)] text-xs font-mono text-[#F4F5F9]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3D5AFE]" />
                <span>Cybersecurity</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#11131C] border border-[rgba(255,255,255,0.08)] text-xs font-mono text-[#F4F5F9]">
                <Cpu className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>AI Automation</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#11131C] border border-[rgba(255,255,255,0.08)] text-xs font-mono text-[#F4F5F9]">
                <Code2 className="w-3.5 h-3.5 text-[#8B5CFF]" />
                <span>Software Development</span>
              </span>
            </div>

            {/* Action Buttons: Primary is AMBER fill with dark text */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="bg-[#FFB547] text-[#07080C] hover:bg-[#ffbe5e] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-display font-bold text-xs sm:text-sm shadow-lg shadow-[#FFB547]/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB547]"
              >
                <span>{t.hero.buttons.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#journey"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#11131C] hover:bg-white/[0.05] text-[#F4F5F9] border border-[rgba(255,255,255,0.08)] hover:border-[#00E5FF] hover:text-[#00E5FF] font-medium text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
              >
                <Compass className="w-4 h-4 text-[#00E5FF]" />
                <span>{t.hero.buttons.exploreJourney}</span>
              </a>

              <div className="relative inline-block">
                {hasGithub ? (
                  <a
                    href={data.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#11131C] hover:bg-white/[0.05] text-[#F4F5F9] border border-[rgba(255,255,255,0.08)] hover:border-[#00E5FF] hover:text-[#00E5FF] font-medium text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
                  >
                    <GithubIcon className="w-4 h-4 text-[#F4F5F9]" />
                    <span>{t.hero.buttons.github}</span>
                  </a>
                ) : (
                  <div
                    className="relative"
                    onMouseEnter={() => setTooltipVisible(true)}
                    onMouseLeave={() => setTooltipVisible(false)}
                  >
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="cursor-not-allowed inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#11131C]/50 text-[#9097AD] border border-[rgba(255,255,255,0.08)] font-medium text-xs sm:text-sm opacity-60"
                    >
                      <GithubIcon className="w-4 h-4 text-[#9097AD]" />
                      <span>{t.hero.buttons.github}</span>
                    </button>
                    {tooltipVisible && (
                      <div
                        role="tooltip"
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-[#11131C] text-[#F4F5F9] text-[11px] rounded shadow-lg border border-[rgba(255,255,255,0.08)] whitespace-nowrap z-30 font-mono"
                      >
                        GitHub handle pending in site.ts
                      </div>
                    )}
                  </div>
                )}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#11131C] hover:bg-white/[0.05] text-[#F4F5F9] border border-[rgba(255,255,255,0.08)] hover:border-[#3D5AFE] font-medium text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5AFE]"
              >
                <Mail className="w-4 h-4 text-[#3D5AFE]" />
                <span>{t.hero.buttons.contact}</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: FLOATING TERMINAL PANEL (col-span-5, centered, width ~460px, NO OVERLAPS) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
            <div className="w-full max-w-[460px] relative">
              {/* Mono label above terminal */}
              <div className="flex items-center gap-2 mb-2.5 font-mono text-xs text-[#00E5FF] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>VIT BHIMAVARAM · IT</span>
              </div>

              {/* Soft blue/cyan and faint violet glow behind floating panel */}
              <div
                className="absolute -inset-4 bg-gradient-to-tr from-[#3D5AFE]/25 via-[#00E5FF]/18 to-[#8B5CFF]/20 blur-2xl rounded-3xl -z-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Clean Terminal panel with NO overlaps */}
              <Terminal className="w-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
