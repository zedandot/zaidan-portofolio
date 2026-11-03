"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("zed-portfolio-lang") as Language | null;
    if (saved === "id" || saved === "en") {
      setLangState(saved);
    } else {
      // Auto-detect browser language if available
      const browserLang = navigator.language?.toLowerCase() ?? "";
      if (browserLang.startsWith("en")) {
        setLangState("en");
      } else {
        setLangState("id");
      }
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("zed-portfolio-lang", newLang);
      document.documentElement.lang = newLang;
    } catch {
      // Ignore local storage errors in private mode
    }
  };

  const toggleLang = () => {
    setLang(lang === "id" ? "en" : "id");
  };

  return (
    <LanguageContext.Provider value={{ lang: mounted ? lang : "id", setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

