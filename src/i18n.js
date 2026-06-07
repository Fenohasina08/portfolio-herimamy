import i18n from "i18next"; //  Correction : On importe la bibliothèque npm, pas le fichier lui-même
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fr from "./locales/fr/translation.json";
import en from "./locales/en/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: fr,
      },
      en: {
        translation: en,
      },
    },

    // Langue utilisée si aucune langue n'est détectée
    fallbackLng: "fr",

    // Langues supportées
    supportedLngs: ["fr", "en"],

    // Détection automatique
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;