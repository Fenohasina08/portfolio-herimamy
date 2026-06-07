import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getPortfolioData } from "../data/getPortfolioData";

export default function usePortfolioData() {
  const { i18n } = useTranslation();
  const [data, setData] = useState(() => getPortfolioData(i18n.language));

  useEffect(() => {
    setData(getPortfolioData(i18n.language));
  }, [i18n.language]);

  return data;
}