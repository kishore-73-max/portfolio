"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Globe, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function Contact() {
  const { t, data } = useLanguage();
  const [copied, setCopied] = useState(false);

  const email = data.links.email?.trim() || "";
  const github = data.links.github?.trim() || "";
  const linkedin = data.links.linkedin?.trim() || "";
  const portfolio = data.links.portfolio?.trim() || "";

  const handleCopyEmail = () => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getChannelConfig = (type: "email" | "github" | "linkedin" | "portfolio") => {
    switch (type) {
      case "email":
        return {
          icon: <Mail className="w-5 h-5 text-[#FFB547]" />,
          value: email,
          href: email ? `mailto:${email}` : "",
          isFilled: Boolean(email),
          actionText: "Send Direct Email",
        };
      case "github":
        return {
          icon: <GithubIcon className="w-5 h-5 text-[#F4F5F9]" />,
          value: github,
          href: github,
          isFilled: Boolean(github),
          actionText: "Visit GitHub Profile",
        };
      case "linkedin":
        return {
          icon: <LinkedinIcon className="w-5 h-5 text-[#00E5FF]" />,
          value: linkedin,
          href: linkedin,
          isFilled: Boolean(linkedin),
          actionText: "Connect on LinkedIn",
        };
      case "portfolio":
      default:
        return {
          icon: <Globe className="w-5 h-5 text-[#8B5CFF]" />,
          value: portfolio,
          href: portfolio,
          isFilled: Boolean(portfolio),
          actionText: "Open Voicera.in",
        };
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-28 border-t border-[rgba(255,255,255,0.08)] bg-[#100E2B] relative overflow-hidden"
    >
      {/* Static low-opacity radial glow (Contact: amber + blue 12-18%) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#FFB547]/14 to-[#3D5AFE]/15 blur-[160px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Giant outlined background word */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 select-none pointer-events-none text-outline font-display font-black text-[clamp(6rem,18vw,18rem)] tracking-tighter opacity-[0.06] whitespace-nowrap z-0"
        aria-hidden="true"
      >
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Big Type and Highlight */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-[#FFB547]">
            06 / COMMUNICATION
          </span>
          <h2
            id="contact-heading"
            className="font-display text-[clamp(2.5rem,6.5vw,6rem)] font-extrabold tracking-tight leading-[0.95] text-[#F4F5F9]"
          >
            Direct <span className="text-[#FFB547]">Engagement</span>
          </h2>
          <p className="text-[#9097AD] text-sm sm:text-base leading-relaxed font-sans">
            {t.contact.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Primary Direct CTA with Amber Button */}
          <div className="lg:col-span-5">
            <div className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#11131C] border border-[rgba(255,255,255,0.08)] shadow-2xl space-y-6 hover:border-[#FFB547]/50 transition-colors h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#07080C] border border-[#FFB547]/40 flex items-center justify-center text-[#FFB547]">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#F4F5F9] tracking-tight">
                  Direct Communication
                </h3>
                <p className="text-xs sm:text-sm text-[#9097AD] leading-relaxed font-sans">
                  Reach out for student collaborations, cybersecurity research, software development, or hackathon opportunities.
                </p>
              </div>

              {/* Primary AMBER CTA Button */}
              <div className="space-y-3 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                <a
                  href={`mailto:${email}`}
                  className="w-full bg-[#FFB547] text-[#07080C] hover:bg-[#ffbe5e] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-bold text-sm shadow-xl shadow-[#FFB547]/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB547]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Email Directly</span>
                </a>

                {email && (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#07080C] hover:bg-white/[0.05] text-[#F4F5F9] border border-[rgba(255,255,255,0.08)] hover:border-[#00E5FF] font-mono text-xs transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#2EE6A6]" />
                        <span className="text-[#2EE6A6]">Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#9097AD]" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right: Direct Profile Channels */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {(["email", "github", "linkedin", "portfolio"] as const).map((type) => {
              const cfg = getChannelConfig(type);

              return (
                <div
                  key={type}
                  className="p-5 sm:p-6 rounded-2xl bg-[#11131C] border border-[rgba(255,255,255,0.08)] hover:border-[#00E5FF]/40 shadow-lg flex flex-col justify-between space-y-4 transition-all hover:-translate-y-1 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#07080C] border border-[rgba(255,255,255,0.08)] flex items-center justify-center">
                        {cfg.icon}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#9097AD]">
                        {type === "portfolio" ? "Live Startup" : type}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-base text-[#F4F5F9] capitalize group-hover:text-[#FFB547] transition-colors">
                        {type === "portfolio" ? "VOICERA AI" : type}
                      </h4>
                      <p className="font-mono text-xs text-[#9097AD] truncate pt-0.5">
                        {cfg.value || "Configured in site.ts"}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[rgba(255,255,255,0.08)]">
                    <a
                      href={cfg.href}
                      target={type === "email" ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00E5FF] hover:text-[#FFB547] transition-colors"
                    >
                      <span>{cfg.actionText}</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
