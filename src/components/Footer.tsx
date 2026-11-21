"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, Shield } from "lucide-react";
import { KishoreMonogramIcon } from "@/components/icons/BrandIcons";

export function Footer() {
  const { t, data } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#07080C] text-[#9097AD] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Identity & Attribution */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <KishoreMonogramIcon className="w-6 h-6" />
              <span className="font-bold text-sm text-[#F4F5F9]">
                {data.identity.fullName}
              </span>
              <span className="text-[rgba(255,255,255,0.2)]">•</span>
              <span className="text-[#9097AD] text-xs">{data.identity.displayName}</span>
            </div>

            {/* Attribution */}
            <p className="text-[#F4F5F9] font-medium text-xs sm:text-sm">
              {t.footer.designedBy}
            </p>
            <p className="text-[#9097AD] text-[11px]">
              {data.identity.college} · Class of {data.identity.gradYear}
            </p>
          </div>

          {/* Quick Nav Anchors & Back to Top */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4 text-xs text-[#9097AD]">
              <a href="#about" className="hover:text-[#F4F5F9] transition-colors">
                {t.nav.about}
              </a>
              <a href="#skills" className="hover:text-[#F4F5F9] transition-colors">
                {t.nav.skills}
              </a>
              <a href="#projects" className="hover:text-[#F4F5F9] transition-colors">
                {t.nav.projects}
              </a>
              <a href="#journey" className="hover:text-[#F4F5F9] transition-colors">
                {t.nav.journey}
              </a>
              <a href="#contact" className="hover:text-[#F4F5F9] transition-colors">
                {t.nav.contact}
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label={t.footer.backToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#11131C] hover:bg-white/[0.05] text-[#F4F5F9] border border-[rgba(255,255,255,0.08)] hover:border-[#FFB547] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB547]"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Integrity Bar */}
        <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-[#9097AD]">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#2EE6A6]" />
            <span>Honest student portfolio. No inflated statistics, fake counters, or clinical claims.</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} {data.identity.fullName}. {t.footer.rights}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
