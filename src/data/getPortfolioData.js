import { portfolioDataFr } from "./portfolioData.fr";
import { portfolioDataEn } from "./portfolioData.en";

const data = {
  fr: portfolioDataFr,
  en: portfolioDataEn,
};

export function getPortfolioData(language = "fr") {
  return data[language] || data.fr;
}