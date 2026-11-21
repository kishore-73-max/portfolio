"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { KishoreMonogramIcon } from "@/components/icons/BrandIcons";

const NAV_ITEMS = [
  { id: "hero", labelKey: "home" },
  { id: "about", labelKey: "about" },
  { id: "skills", labelKey: "skills" },
  { id: "projects", labelKey: "projects" },
  { id: "achievements", labelKey: "achievements" },
  { id: "journey", labelKey: "journey" },
  { id: "contact", labelKey: "contact" },
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FFB547] focus:text-[#07080C] focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white font-mono text-xs"
      >
        {t.common.skipToContent}
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
          isScrolled
            ? "bg-[#07080C]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] shadow-xl shadow-black/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo / Brand with Monogram Icon */}
            <a
              href="#hero"
              className="flex items-center gap-3 group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB547]"
              aria-label="Kishore Portfolio Home"
            >
              <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform">
                <KishoreMonogramIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm sm:text-base tracking-tight text-[#F4F5F9] group-hover:text-[#FFB547] transition-colors">
                  Kishore
                </span>
                <span className="font-mono text-[10px] text-[#9097AD] tracking-widest uppercase">
                  IT Builder
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#11131C]/80 border border-[rgba(255,255,255,0.08)] backdrop-blur-sm shadow-inner"
              aria-label="Primary Navigation"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  data-nav-id={item.id}
                  className="nav-link relative px-3 py-1.5 rounded-full text-xs font-mono text-[#9097AD] hover:text-[#F4F5F9] hover:bg-white/[0.04] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB547]"
                >
                  <span>{t.nav[item.labelKey]}</span>
                </a>
              ))}
            </nav>

            {/* Right Action: Voicera.in Live Link with Amber & Cyan Accents */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://voicera.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#11131C] hover:bg-[#FFB547]/15 text-[#FFB547] border border-[#FFB547]/40 text-xs font-mono transition-colors shadow-sm"
              >
                <span>voicera.in</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#9097AD] hover:text-[#F4F5F9] hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB547]"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#07080C] border-b border-[rgba(255,255,255,0.08)] px-4 pt-2 pb-6 space-y-2 shadow-2xl">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-mono text-[#9097AD] hover:text-[#F4F5F9] hover:bg-white/[0.04]"
                >
                  <span>{t.nav[item.labelKey]}</span>
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-[rgba(255,255,255,0.08)]">
              <a
                href="https://voicera.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#11131C] text-[#FFB547] border border-[#FFB547]/40 font-mono text-xs"
              >
                <span>Live Project: voicera.in</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
