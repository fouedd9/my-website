import { useContext } from "react";

import { LanguageContext } from "./LanguageContext";

export function useTranslation() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useTranslation doit être utilisé à l’intérieur de LanguageProvider.",
        );
    }

    return context;
}