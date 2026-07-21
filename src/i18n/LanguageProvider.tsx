import { useEffect, useMemo, useState, type ReactNode } from "react";

import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";
import type { Language } from "./types";

interface LanguageProviderProps {
  children: ReactNode;
}

const LANGUAGE_STORAGE_KEY = "portfolio-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "fr";
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (savedLanguage === "fr" || savedLanguage === "en") {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language?.toLowerCase() ?? "fr";

  return browserLanguage.startsWith("en") ? "en" : "fr";
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);

    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "fr" ? "en" : "fr"));
  };

  const value = useMemo(
    () => ({
      language,
      t: translations[language],
      setLanguage,
      toggleLanguage,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
