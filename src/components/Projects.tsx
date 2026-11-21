"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/types/site";
import { ProjectModal } from "@/components/ProjectModal";
import { ExternalLink, Info, CheckCircle2 } from "lucide-react";

function ProjectCard({
  project,
  index,
  onOpenDetails,
  comingSoonTooltip,
  liveDemoLabel,
  viewDetailsLabel,
}: {
  project: Project;
  index: number;
  onOpenDetails: (p: Project) => void;
  comingSoonTooltip: string;
  liveDemoLabel: string;
  viewDetailsLabel: string;
}) {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const hasDemo = Boolean(project.demoUrl && project.demoUrl.trim() !== "");

  // Status badges mapping:
  // Completed = green, Building = amber, Prototype = violet, Research = cyan, Idea = muted gray
  const getStatusBadgeStyle = (status: Project["status"]) => {
    switch (status) {
      case "Completed":
        return "border-[#2EE6A6]/40 bg-[#2EE6A6]/10 text-[#2EE6A6]";
      case "Building":
        return "border-[#FFB547]/40 bg-[#FFB547]/10 text-[#FFB547]";
      case "Prototype":
        return "border-[#8B5CFF]/40 bg-[#8B5CFF]/10 text-[#8B5CFF]";
      case "Research":
        return "border-[#00E5FF]/40 bg-[#00E5FF]/10 text-[#00E5FF]";
      case "Idea":
      default:
        return "border-slate-500/40 bg-slate-500/10 text-[#9097AD]";
    }
  };

  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <div className="w-full rounded-2xl bg-[#11131C] border border-[#8B5CFF]/30 hover:border-[#8B5CFF] p-6 sm:p-8 shadow-2xl hover:shadow-[0_0_35px_rgba(139,92,255,0.25)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group relative">
      {/* Big Outlined Number in Corner */}
      <div className="absolute top-5 right-6 select-none pointer-events-none font-display font-black text-4xl sm:text-5xl text-outline-violet group-hover:text-outline-amber transition-colors">
        {projectNumber}
      </div>

      <div className="space-y-4">
        {/* Category & Status Badge */}
        <div className="flex items-center gap-2">
          <span
            className={`font-mono text-[10px] uppercase font-semibold px-2.5 py-0.5 rounded-full border ${getStatusBadgeStyle(
              project.status
            )}`}
          >
            {project.status === "Completed" ? "Live & Deployed" : project.status}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#9097AD]">
            • {project.category}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2 pr-12">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F5F9] group-hover:text-[#FFB547] transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#9097AD] leading-relaxed line-clamp-3 font-sans">
            {project.description}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded bg-[#07080C] border border-[#8B5CFF]/20 font-mono text-[10px] text-[#9097AD] group-hover:text-[#F4F5F9] transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <ul className="space-y-1.5 pt-3 border-t border-[rgba(255,255,255,0.08)]">
            {project.features.slice(0, 2).map((item, hIdx) => (
              <li
                key={hIdx}
                className="text-xs text-[#9097AD] flex items-start gap-2 leading-relaxed"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Buttons: Primary is AMBER fill */}
      <div className="flex items-center gap-3 pt-6 mt-4 border-t border-[rgba(255,255,255,0.08)]">
        {hasDemo ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFB547] text-[#07080C] hover:bg-[#ffbe5e] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-display font-bold text-xs shadow-md shadow-[#FFB547]/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB547]"
          >
            <span>{liveDemoLabel}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <div
            className="relative"
            onMouseEnter={() => setActiveTooltip(project.id)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="cursor-not-allowed inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#07080C] text-[#9097AD] border border-[rgba(255,255,255,0.08)] font-medium text-xs opacity-60"
            >
              <span>{liveDemoLabel}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#9097AD]" />
            </button>
            {activeTooltip === project.id && (
              <div
                role="tooltip"
                className="absolute bottom-full left-0 mb-2 px-2.5 py-1 bg-[#07080C] text-[#F4F5F9] text-[11px] rounded shadow-lg border border-[rgba(255,255,255,0.08)] whitespace-nowrap z-20 font-mono"
              >
                {comingSoonTooltip}
              </div>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-lg bg-[#07080C] hover:bg-white/[0.05] text-[#F4F5F9] border border-[rgba(255,255,255,0.08)] hover:border-[#00E5FF] hover:text-[#00E5FF] font-medium text-xs transition-colors"
        >
          <span>{viewDetailsLabel}</span>
        </button>
      </div>
    </div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 sm:py-28 border-t border-[rgba(255,255,255,0.08)] bg-[#100E2B] relative overflow-hidden"
    >
      {/* Static low-opacity radial glow (Projects: violet + blue 12-18%) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-br from-[#8B5CFF]/18 to-[#3D5AFE]/15 blur-[160px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Giant outlined background word */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 select-none pointer-events-none text-outline font-display font-black text-[clamp(6rem,18vw,18rem)] tracking-tighter opacity-[0.06] whitespace-nowrap z-0"
        aria-hidden="true"
      >
        PROJECTS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Header with Big Type and Highlight */}
        <div className="max-w-3xl space-y-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs tracking-widest uppercase text-[#FFB547]">
            03 / FEATURED WORK
          </span>
          <h2
            id="projects-heading"
            className="font-display text-[clamp(2.5rem,6.5vw,6rem)] font-extrabold tracking-tight leading-[0.95] text-[#F4F5F9]"
          >
            Selected <span className="text-[#FFB547]">Projects</span>
          </h2>
          <p className="text-[#9097AD] text-sm sm:text-base font-sans">
            {t.projects.sectionSubtitle}
          </p>
        </div>

        {/* Status Legend */}
        <div className="mb-10 p-4 rounded-xl bg-[#11131C] border border-[rgba(255,255,255,0.08)] shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F4F5F9] pb-2">
            <Info className="w-4 h-4 text-[#FFB547]" />
            <span>{t.projects.legendTitle}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="px-2.5 py-1.5 rounded-lg bg-[#07080C] border border-[#2EE6A6]/30 flex items-center gap-2 text-xs font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2EE6A6]" />
              <span className="text-[#2EE6A6] font-semibold">Completed / Live</span>
            </div>
            <div className="px-2.5 py-1.5 rounded-lg bg-[#07080C] border border-[#FFB547]/30 flex items-center gap-2 text-xs font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FFB547]" />
              <span className="text-[#FFB547] font-semibold">Building (Voicera AI)</span>
            </div>
            <div className="px-2.5 py-1.5 rounded-lg bg-[#07080C] border border-[#8B5CFF]/30 flex items-center gap-2 text-xs font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8B5CFF]" />
              <span className="text-[#8B5CFF] font-semibold">Prototype (Vedic Resonance)</span>
            </div>
            <div className="px-2.5 py-1.5 rounded-lg bg-[#07080C] border border-[#00E5FF]/30 flex items-center gap-2 text-xs font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00E5FF]" />
              <span className="text-[#00E5FF] font-semibold">Research (Cybersecurity)</span>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.projects.items.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenDetails={setActiveModalProject}
              comingSoonTooltip={t.projects.comingSoonTooltip}
              liveDemoLabel={t.projects.liveDemo}
              viewDetailsLabel={t.projects.viewDetails}
            />
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        legend={t.projects.legend}
      />
    </section>
  );
}
