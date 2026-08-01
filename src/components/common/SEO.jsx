import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SEO = () => {
  const { t, i18n } = useTranslation();

  const title = t("seo.title", "Herimamy Fenohasina RA-FANOMEZANA — Développeur Full Stack Web | Madagascar");
  const description = t(
    "seo.description",
    "Herimamy Fenohasina, étudiant en informatique à HEI Ivandry (Madagascar), développeur web full stack (React, JavaScript, Java Spring Boot)."
  );

  return (
    <Helmet htmlAttributes={{ lang: i18n.language }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={i18n.language === "en" ? "en_US" : "fr_FR"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;