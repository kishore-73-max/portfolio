"use client";

import React, { createContext, useContext } from "react";
import { siteData } from "@/content/site";
import { SiteDictionary } from "@/types/site";

interface SiteContextType {
  t: SiteDictionary;
  data: typeof siteData;
}

const SiteContext = createContext<SiteContextType>({
  t: siteData.content,
  data: siteData,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return (
    <SiteContext.Provider
      value={{
        t: siteData.content,
        data: siteData,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useLanguage() {
  return useContext(SiteContext);
}
