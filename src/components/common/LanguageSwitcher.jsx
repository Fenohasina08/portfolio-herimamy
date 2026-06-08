import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const isFrench = i18n.language === "fr";

  const changeLanguage = () => {
    i18n.changeLanguage(isFrench ? "en" : "fr");
  };

  return (
    <div
      onClick={changeLanguage}
      style={{
        width: "120px",
        height: "50px",
        borderRadius: "909px",
        position: "relative",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 12px",
        userSelect: "none",
        boxShadow: "0 8px 20px rgba(0,0,0,.15)",
      }}
    >
      {/* Drapeau FR */}
      <span
        style={{
          fontSize: "20px",
          opacity: isFrench ? 1 : 0.6,
          transition: "0.3s",
          zIndex: 2,
        }}
      >
        🇫🇷
      </span>

      {/* Drapeau EN */}
      <span
        style={{
          fontSize: "20px",
          opacity: !isFrench ? 1 : 0.6,
          transition: "0.3s",
          zIndex: 2,
        }}
      >
        🇬🇧
      </span>

      {/* Petit switch central */}
      <div
        style={{
          position: "absolute",
          width: "42px",
          height: "20px",
          background: "#8d0025",
          borderRadius: "999px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          padding: "3px",
        }}
      >
        <div
          style={{
            width: "18px",
            height: "18px",
            background: "#fff",
            borderRadius: "50%",
            transform: isFrench
              ? "translateX(0)"
              : "translateX(18px)",
            transition: "transform .3s ease",
          }}
        />
      </div>
    </div>
  );
};

export default LanguageSwitcher;