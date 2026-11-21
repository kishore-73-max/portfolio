"use client";

import React, { useEffect } from "react";
import { Project, StatusLegendItem } from "@/types/site";
import { useLanguage } from "@/context/LanguageContext";
import { X, CheckCircle, AlertCircle, Layers, Tag, ExternalLink } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  legend: StatusLegendItem[];
}

export function ProjectModal({ project, onClose, legend }: ProjectModalProps) {
  const { t } = useLanguage();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentLegend = legend.find((l) => l.status === project.status);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Click outside backdrop to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D0E14] border border-[rgba(255,255,255,0.12)] shadow-2xl p-6 sm:p-8 space-y-6 z-10">
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] pb-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#00E5FF]">
                {project.category}
              </span>
              <span
                className={`font-mono text-[10px] uppercase font-semibold px-2.5 py-0.5 rounded-full border ${
                  currentLegend?.colorClass || "border-[#3D5AFE]/50 text-[#00E5FF]"
                }`}
              >
                {project.status === "Completed" ? "Live & Deployed" : project.status}
              </span>
            </div>
            <h3
              id="modal-project-title"
              className="font-display text-2xl sm:text-3xl font-bold text-[#F2F3F7] tracking-tight"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t.projects.closeDetails}
            className="p-1.5 rounded-lg text-[#8A8FA3] hover:text-white bg-[#050507] hover:bg-[#3D5AFE]/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5AFE]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Detailed Description */}
        <div className="space-y-3">
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#8A8FA3]">
            Overview & Motivation
          </h4>
          <p className="text-[#F2F3F7] text-sm sm:text-base leading-relaxed font-sans">
            {project.detailedDescription || project.description}
          </p>
        </div>

        {/* Features Explored */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#8A8FA3] flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#00E5FF]" />
              <span>{t.projects.featuresExploredLabel}</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F2F3F7]">
              {project.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2.5 font-sans">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Tags */}
        <div className="space-y-2">
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#8A8FA3] flex items-center gap-1.5">
            <Tag className="w-4 h-4 text-[#3D5AFE]" />
            <span>Technologies & Tools</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="font-mono px-2.5 py-1 rounded-md bg-[#050507] border border-[rgba(255,255,255,0.08)] text-xs text-[#8A8FA3]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Disclaimers if applicable */}
        {project.disclaimer && (
          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-300/90 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span className="font-sans">{project.disclaimer}</span>
          </div>
        )}

        {/* Development notes */}
        {project.notes && (
          <div className="p-3 rounded-lg bg-[#050507] border border-[rgba(255,255,255,0.06)] text-xs text-[#8A8FA3]">
            <span className="font-mono font-semibold text-[#00E5FF]">ENGINEER NOTE:</span> {project.notes}
          </div>
        )}

        {/* Actions Footer */}
        <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-accent inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-black font-display text-xs font-bold shadow-md shadow-[#3D5AFE]/30 transition-all hover:opacity-95"
              >
                <span>{t.projects.liveDemo}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="cursor-not-allowed inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#050507] text-[#8A8FA3] border border-[rgba(255,255,255,0.08)] text-xs font-mono opacity-50"
              >
                <span>{t.projects.liveDemo}</span>
                <span className="text-[10px] bg-[#0D0E14] px-1.5 py-0.5 rounded text-[#8A8FA3]">
                  {t.common.comingSoon}
                </span>
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#050507] hover:bg-white/[0.05] text-[#F2F3F7] text-xs font-mono transition-colors border border-[rgba(255,255,255,0.08)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D5AFE]"
          >
            {t.projects.closeDetails}
          </button>
        </div>
      </div>
    </div>
  );
}
