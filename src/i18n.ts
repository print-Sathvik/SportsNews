import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enJSON from "./locales/en.json";
import frJSON from "./locales/fr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: { ...enJSON },
      fr: { ...frJSON }
    },
    fallbackLng: "en"
  })