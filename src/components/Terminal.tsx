"use client";

import React, { useState, useEffect, useMemo, useSyncExternalStore } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface TerminalCommand {
  cmd: string;
  output: string;
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function Terminal({ className = "" }: { className?: string }) {
  const { t } = useLanguage();

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const commands: TerminalCommand[] = useMemo(
    () => [
      { cmd: "whoami", output: t.hero.terminalWhoami },
      { cmd: "focus", output: t.hero.terminalFocus },
      { cmd: "status", output: t.hero.terminalStatus },
    ],
    [t.hero.terminalWhoami, t.hero.terminalFocus, t.hero.terminalStatus]
  );

  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [displayedCmd, setDisplayedCmd] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [completedSteps, setCompletedSteps] = useState<TerminalCommand[]>([]);

  useEffect(() => {
    if (prefersReducedMotion || currentCmdIndex >= commands.length) return;

    const currentTarget = commands[currentCmdIndex];
    if (!currentTarget) return;

    if (isTyping) {
      if (displayedCmd.length < currentTarget.cmd.length) {
        const timeout = setTimeout(() => {
          setDisplayedCmd(currentTarget.cmd.slice(0, displayedCmd.length + 1));
        }, 45);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setCompletedSteps((prev) => [...prev, currentTarget]);
        }, 250);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayedCmd("");
        setIsTyping(true);
        setCurrentCmdIndex((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [displayedCmd, isTyping, currentCmdIndex, prefersReducedMotion, commands]);

  const allDone = currentCmdIndex >= commands.length;
  const itemsToRender = prefersReducedMotion ? commands : completedSteps;

  return (
    <div
      className={`rounded-2xl bg-[#0D0E16]/95 backdrop-blur-xl border border-[rgba(255,255,255,0.12)] shadow-2xl overflow-hidden font-mono hover:border-[#00E5FF]/40 transition-colors ${className}`}
      aria-label="Developer terminal session"
      aria-live="polite"
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#07080C]/90 border-b border-[rgba(255,255,255,0.08)] select-none">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
        </div>
        <span className="text-xs text-[#9097AD] truncate font-medium">kishore@vishnu-it: ~</span>
        <div className="flex items-center gap-1.5 text-[10px] text-[#00E5FF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          <span>zsh</span>
        </div>
      </div>

      {/* Terminal Body: Slightly larger text, 3 commands and outputs */}
      <div className="p-5 sm:p-6 space-y-4 text-[#F4F5F9]">
        {itemsToRender.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#00E5FF] font-semibold">
              <span className="text-[#3D5AFE]">&gt;</span>
              <span>{item.cmd}</span>
            </div>
            <p className="pl-3.5 text-xs sm:text-[13px] text-[#9097AD] border-l-2 border-[#3D5AFE]/40 leading-relaxed">
              {item.output}
            </p>
          </div>
        ))}

        {/* Active Typing Line */}
        {!prefersReducedMotion && !allDone && isTyping && (
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#00E5FF] font-semibold">
            <span className="text-[#3D5AFE]">&gt;</span>
            <span>{displayedCmd}</span>
            <span className="inline-block w-2 h-4 bg-[#00E5FF] animate-pulse align-middle" />
          </div>
        )}

        {/* Permanently Blinking Cursor When Complete */}
        {(allDone || prefersReducedMotion) && (
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#00E5FF] pt-1">
            <span className="text-[#3D5AFE]">&gt;</span>
            <span className="inline-block w-2 h-4 bg-[#00E5FF] animate-pulse align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}
