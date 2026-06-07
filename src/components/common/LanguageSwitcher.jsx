import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <button
        onClick={() => changeLanguage("fr")}
        style={{
          padding: "6px 10px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "1px solid var(--accent)",
          background: i18n.language === "fr" ? "var(--accent)" : "transparent",
          color: i18n.language === "fr" ? "#fff" : "var(--text)",
        }}
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage("en")}
        style={{
          padding: "6px 10px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "1px solid var(--accent)",
          background: i18n.language === "en" ? "var(--accent)" : "transparent",
          color: i18n.language === "en" ? "#fff" : "var(--text)",
        }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;