import { createContext } from "react";

import type { Language, Translations } from "./types";

export interface LanguageContextValue {
  language: Language;
  t: Translations;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);
