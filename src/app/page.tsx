"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { CurrentlyExploring } from "@/components/CurrentlyExploring";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050507] text-[#F2F3F7]">
      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <SkillsMarquee />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <CurrentlyExploring />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
