import { Language } from "../../types/index.js";
// @ts-ignore
const languages: Language = jw_epub_parser.languages;

export const getMonthNames = (lang: string) => {
  return [
    // @ts-ignore
    { index: 0, name: languages[lang].januaryVariations },
    // @ts-ignore
    { index: 1, name: languages[lang].februaryVariations },
    // @ts-ignore
    { index: 2, name: languages[lang].marchVariations },
    // @ts-ignore
    { index: 3, name: languages[lang].aprilVariations },
    // @ts-ignore
    { index: 4, name: languages[lang].mayVariations },
    // @ts-ignore
    { index: 5, name: languages[lang].juneVariations },
    // @ts-ignore
    { index: 6, name: languages[lang].julyVariations },
    // @ts-ignore
    { index: 7, name: languages[lang].augustVariations },
    // @ts-ignore
    { index: 8, name: languages[lang].septemberVariations },
    // @ts-ignore
    { index: 9, name: languages[lang].octoberVariations },
    // @ts-ignore
    { index: 10, name: languages[lang].novemberVariations },
    // @ts-ignore
    { index: 11, name: languages[lang].decemberVariations },
  ];
};

export const getPartMinutesSeparatorVariations = (lang: string) =>
  // @ts-ignore
  languages[lang].partMinutesSeparatorVariations;
