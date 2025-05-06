import { JWEPUBParserError } from '../classes/error.js';
		// @ts-ignore
import { WDateParsing, WDateParsingResult, LangRegExp, MWBDateParsingResult, MWBDateParsing } from '../types/index.js';
		// @ts-ignore
import { getMonthNames } from './language_rules.js';
import overrides from './override.js';

		// @ts-ignore
const dateRangeSeparator = `\\s? bis |[-–—]| do | — | – \\s?`;
const wordWithDiacritics = `\\p{L}+|\\p{L}+\\p{M}*`;
let option1: string, option2: string, option3: string;

// #region MEETING WORKBOOK

		// @ts-ignore
// #region date patterns: add your language regular expression date pattern if it is different than common

		// @ts-ignore
// date like 1) 23-29 décembre; or 2) 25 novembre–1 décembre; or 3) 30 décembre 2024-5 janvier 2025
		// @ts-ignore
option1 = `(\\d{1,2})(?:er|º)?(?:${dateRangeSeparator})(?:\\d{1,2}) (${wordWithDiacritics})`;
		// @ts-ignore
option2 = `(\\d{1,2})(?:er|º)? (${wordWithDiacritics})(?:${dateRangeSeparator})(?:\\d{1,2})(?:er|º)?(?: )?(?:${wordWithDiacritics})`;
option3 = `(\\d{1,2}) (${wordWithDiacritics}) (\\d{4})`;
		// @ts-ignore
const mwbDatePatternCommon = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1) DECEMBER 23-29; or 2) NOVEMBER 25–DECEMBER 1; or 3) DECEMBER 30, 2024-JANUARY 5,2025
option1 = `(${wordWithDiacritics}) (\\d{1,2})[-–](?:\\d{1,2})`;
option2 = `(${wordWithDiacritics}) (\\d{1,2})[-–](?:${wordWithDiacritics}) (?:\\d{1,2})`;
option3 = `(${wordWithDiacritics}) (\\d{1,2}), (\\d{4})`;
		// @ts-ignore
const mwbDatePatternE = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) 12月23-29日; or 2) 11月25日-12月1日; or 3) 2024年12月30日-2025年1月5日
option1 = `(\\d{1,2})月(\\d{1,2})[-–](?:\\d{1,2})日`;
option2 = `(\\d{1,2})月(\\d{1,2})日`;
option3 = `(?:\\d{4})年(\\d{1,2})月(\\d{1,2})日`;
		// @ts-ignore
const mwbDatePatternJ = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) 11월 4-10일; or 2) 11월 25일–12월 1일; or 3) 2024년 12월 30일–2025년 1월 5일
option1 = `(\\d{1,2})월 (\\d{1,2})[-–](?:\\d{1,2})일`;
option2 = `(\\d{1,2})월 (\\d{1,2})일`;
option3 = `(?:\\d{4})년 (\\d{1,2})월 (\\d{1,2})일`;
		// @ts-ignore
const mwbDatePatternKO = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) 4-10 listopada; or 2) 25 listopada do 1 grudnia; or 3) 30 grudnia 2024 do 5 stycznia 2025
option1 = `(\\d{1,2})[-–](?:\\d{1,2}) (${wordWithDiacritics})`;
option2 = `(\\d{1,2}) (${wordWithDiacritics}) do (?:\\d{1,2}) (?:${wordWithDiacritics})`;
option3 = `(\\d{1,2}) (${wordWithDiacritics}) (\\d{4})`;
		// @ts-ignore
const mwbDatePatternP = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) 4-10 de noviembre; or 2) 25 de noviembre a 1 de diciembre; or 3) 30 de diciembre de 2024 a 5 de enero de 2025
option1 = `(\\d{1,2})[-–](?:\\d{1,2}) de (${wordWithDiacritics})`;
option2 = `(\\d{1,2}) de (${wordWithDiacritics}) a (?:\\d{1,2}) de (?:${wordWithDiacritics})`;
option3 = `(\\d{1,2}) de (${wordWithDiacritics}) de (\\d{4})`;
		// @ts-ignore
const mwbDatePatternS = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) 4-10 de novembro; or 2) 25 de novembro–1.º de dezembro; or 3) 30 de dezembro de 2024–5 de janeiro de 2025
option1 = `(\\d{1,2})[-–](?:\\d{1,2}) de (${wordWithDiacritics})`;
option2 = `(\\d{1,2}) de (${wordWithDiacritics})[-–](?:\\d{1,2})(?:.º)? de (?:${wordWithDiacritics})`;
option3 = `(\\d{1,2}) de (${wordWithDiacritics}) de (\\d{4})`;
		// @ts-ignore
const mwbDatePatternT = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) 4-10 de noviembre; or 2) 25 de noviembre a 1 de diciembre; or 3) 30 de diciembre de 2024 a 5 de enero de 2025
option1 = `(\\d{1,2}) a (?:\\d{1,2}) de (${wordWithDiacritics})`;
option2 = `(\\d{1,2}) de (${wordWithDiacritics}) a (?:\\d{1,2}) de (?:${wordWithDiacritics})`;
option3 = `(\\d{1,2}) de (${wordWithDiacritics}) de (\\d{4})`;
		// @ts-ignore
const mwbDatePatternTPO = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) 4.-10. de noviembre; or 2) 25. noviembre - 1. de diciembre; or 3) 30. diciembre 2024-5. enero 2025
option1 = `(\\d{1,2}).[-–](?:\\d{1,2}). (${wordWithDiacritics})`;
option2 = `(\\d{1,2}). (${wordWithDiacritics}) ?[-–] ?(?:\\d{1,2}). (?:${wordWithDiacritics})`;
option3 = `(\\d{1,2}). (${wordWithDiacritics}) (\\d{4})`;
		// @ts-ignore
const mwbDatePatternX = `${option1}|${option2}|${option3}`;

		// @ts-ignore
const mwbDatePatterns: LangRegExp = {
		// @ts-ignore
  common: new RegExp(mwbDatePatternCommon, 'giu'),
		// @ts-ignore
  CH: new RegExp(mwbDatePatternJ, 'giu'),
		// @ts-ignore
  CHS: new RegExp(mwbDatePatternJ, 'giu'),
		// @ts-ignore
  E: new RegExp(mwbDatePatternE, 'giu'),
		// @ts-ignore
  FI: new RegExp(mwbDatePatternX, 'giu'),
		// @ts-ignore
  IL: new RegExp(mwbDatePatternE, 'giu'),
		// @ts-ignore
  J: new RegExp(mwbDatePatternJ, 'giu'),
		// @ts-ignore
  KO: new RegExp(mwbDatePatternKO, 'giu'),
		// @ts-ignore
  P: new RegExp(mwbDatePatternP, 'giu'),
		// @ts-ignore
  PGW: new RegExp(mwbDatePatternE, 'giu'),
		// @ts-ignore
  S: new RegExp(mwbDatePatternS, 'giu'),
		// @ts-ignore
  ST: new RegExp(mwbDatePatternX, 'giu'),
		// @ts-ignore
  SV: new RegExp(mwbDatePatternX, 'giu'),
		// @ts-ignore
  SW: new RegExp(mwbDatePatternE, 'giu'),
		// @ts-ignore
  T: new RegExp(mwbDatePatternT, 'giu'),
		// @ts-ignore
  TG: new RegExp(mwbDatePatternE, 'giu'),
		// @ts-ignore
  TPO: new RegExp(mwbDatePatternTPO, 'giu'),
		// @ts-ignore
  TW: new RegExp(mwbDatePatternE, 'giu'),
		// @ts-ignore
  X: new RegExp(mwbDatePatternX, 'giu'),
};

// #endregion

		// @ts-ignore
// #region date parsing: add your language regular expression pattern if it is different than common, or use existing function if it matches your language
		// @ts-ignore
const mwbParsingCommon = (groups: string[]): MWBDateParsingResult => {
		// @ts-ignore
		// @ts-ignore
  let date: string, month: string;

  if (groups[1]) {
		// @ts-ignore
    date = groups[1];
		// @ts-ignore
    month = groups[2];
  } else if (groups[3]) {
		// @ts-ignore
    date = groups[3];
		// @ts-ignore
    month = groups[4];
  } else {
		// @ts-ignore
    date = groups[5];
		// @ts-ignore
    month = groups[6];
  }

		// @ts-ignore
		// @ts-ignore
  return [month, date];
};

		// @ts-ignore
const mwbParsingE = (groups: string[]): MWBDateParsingResult => {
		// @ts-ignore
		// @ts-ignore
  let date: string, month: string;

  if (groups[1]) {
		// @ts-ignore
    month = groups[1];
		// @ts-ignore
    date = groups[2];
  } else if (groups[3]) {
		// @ts-ignore
    month = groups[3];
		// @ts-ignore
    date = groups[4];
  } else {
		// @ts-ignore
    month = groups[5];
		// @ts-ignore
    date = groups[6];
  }

		// @ts-ignore
		// @ts-ignore
  return [month, date];
};

		// @ts-ignore
const mwbDateParsing: MWBDateParsing = {
  common: mwbParsingCommon,
  CH: mwbParsingE,
  CHS: mwbParsingE,
  E: mwbParsingE,
  IL: mwbParsingE,
  J: mwbParsingE,
  KO: mwbParsingE,
  PGW: mwbParsingE,
  SW: mwbParsingE,
  TG: mwbParsingE,
  TW: mwbParsingE,
};

// #endregion

		// @ts-ignore
		// @ts-ignore
export const extractMWBDate = (src: string, year: number, lang: string) => {
  const srcClean = src
    .trim()
    .replace('  ', ' ')
    .replace('​', '')
    .replace('⁠', '')
    .replace(/\u200F/g, '');

		// @ts-ignore
  const datePattern = mwbDatePatterns[lang] || mwbDatePatterns.common;

		// @ts-ignore
  const match = srcClean.match(datePattern);

  if (!match) {
		// @ts-ignore
    throw new JWEPUBParserError('mwb', `Parsing failed for Meeting Workbook Date. The input was: ${src}`);
  }

		// @ts-ignore
  const groups = Array.from(datePattern.exec(srcClean)!);

		// @ts-ignore
  const parseDataFunc = mwbDateParsing[lang] || mwbDateParsing.common;

		// @ts-ignore
		// @ts-ignore
  let [month, date] = parseDataFunc(groups);

		// @ts-ignore
  if (isNaN(+month)) {
		// @ts-ignore
    const months = getMonthNames(lang);
		// @ts-ignore
    const monthIndex = months.find((record) => record.name.toLocaleLowerCase().includes(month.toLowerCase()))!.index;

		// @ts-ignore
    month = String(monthIndex + 1);
  }

		// @ts-ignore
		// @ts-ignore
		// @ts-ignore
  const result = `${year}/${String(month).padStart(2, '0')}/${String(date).padStart(2, '0')}`;

  return result;
};

// #endregion

// #region WATCHTOWER STUDY

		// @ts-ignore
// #region date patterns: add your language regular expression date pattern if it is different than common

		// @ts-ignore
// date like 1-) 16-22 December 2024; or 2) 26 June–2 July 2023 ; or 3) 30 December 2024-5 January 2025
		// @ts-ignore
option1 = `(\\d{1,2})(?:${dateRangeSeparator})(?:\\d{1,2})? (${wordWithDiacritics})(?:,)? (\\d{4})`;
		// @ts-ignore
option2 = `(\\d{1,2}) (${wordWithDiacritics})(?:${dateRangeSeparator})(?:\\d{1,2}) (?:${wordWithDiacritics}) (\\d{4})`;
option3 = `(\\d{1,2}) (${wordWithDiacritics})(?:,)? (\\d{4})`;
		// @ts-ignore
const wDatePatternCommon = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) December 16-22, 2024; or 2) December 30, 2024-January 5, 2025
option1 = `(${wordWithDiacritics}) (\\d{1,2})[-–](?:\\d{1,2})?, (\\d{4})`;
option2 = `(${wordWithDiacritics}) (\\d{1,2})[-–](?:${wordWithDiacritics}) (?:\\d{1,2}), (\\d{4})`;
option3 = `(${wordWithDiacritics}) (\\d{1,2}), (\\d{4})`;
		// @ts-ignore
const wDatePatternE = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) 2024年12月16-22日; or 2) 2024年12月30日-2025年1月5日
option1 = `(\\d{4})年(?:nián)?(\\d{1,2})月(?:yuè)?(\\d{1,2})[-–～](\\d{1,2})日`;
option2 = `(\\d{4})年(?:nián)?(\\d{1,2})月(?:yuè)?(\\d{1,2})日`;
		// @ts-ignore
const wDatePatternJ = `${option1}|${option2}`;

		// @ts-ignore
// date like 1-) 2024년 10월 7-13일; or 2) 2024년 10월 28일–2024년 11월 3일
option1 = `(\\d{4})년 (\\d{1,2})월 (\\d{1,2})[-–](\\d{1,2})일`;
option2 = `(\\d{4})년 (\\d{1,2})월 (\\d{1,2})일`;
		// @ts-ignore
const wDatePatternKO = `${option1}|${option2}`;

		// @ts-ignore
// date like 1-) Artykuł do studium w tygodniu od 14 do 20 października 2024 roku; or 2) Artykuł do studium w tygodniu od 28 października do 3 listopada 2024 roku; or 3) Artykuł do studium w tygodniu od 30 grudnia 2024 roku do 5 stycznia 2025 roku.
option1 = `(\\d{1,2}) do (?:\\d{1,2})? (${wordWithDiacritics}) (\\d{4})`;
option2 = `(\\d{1,2}) (${wordWithDiacritics}) do (?:\\d{1,2}) (?:${wordWithDiacritics}) (\\d{4})`;
option3 = `(\\d{1,2}) (${wordWithDiacritics}) (\\d{4})`;
		// @ts-ignore
const wDatePatternP = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) 16 al 22 de december de 2024; or 2) 30 de december de 2024 al 5 de january de 2025
option1 = `(\\d{1,2}) al (?:\\d{1,2})? de (${wordWithDiacritics}) de (\\d{4})`;
option2 = `(\\d{1,2}) de (${wordWithDiacritics}) de (\\d{4})`;
		// @ts-ignore
const wDatePatternS = `${option1}|${option2}`;

		// @ts-ignore
// date like 1-) 16-22 de december de 2024; or 2) Estudo para a semana de 28 de outubro-3 de novembro de 2024; or 3) 30 de december de 2024-5 de january de 2025
option1 = `(\\d{1,2})[-](?:\\d{1,2})? de (${wordWithDiacritics}) de (\\d{4})`;
option2 = `(\\d{1,2}) de (${wordWithDiacritics})[-](?:\\d{1,2})?(?:.º)? de (?:${wordWithDiacritics}) de (\\d{4})`;
option3 = `(\\d{1,2}) de (${wordWithDiacritics}) de (\\d{4})`;
		// @ts-ignore
const wDatePatternT = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) 16 a 22 de december de 2024; or 2) 30 de december de 2024 a 5 de january de 2025
option1 = `(\\d{1,2}) a (?:\\d{1,2})? de (${wordWithDiacritics}) de (\\d{4})`;
option2 = `(\\d{1,2}) de (${wordWithDiacritics}) de (\\d{4})`;
		// @ts-ignore
const wDatePatternTPO = `${option1}|${option2}`;

		// @ts-ignore
// date like 1-) Hianarana ny herinandron’ny 9 ka hatramin’ny 15 Desambra 2024.; or 2) Hianarana ny herinandron’ny 30 Desambra 2024 ka hatramin’ny 5 Janoary 2025
option1 = `(\\d{1,2}) ka hatramin’ny (?:\\d{1,2})? (${wordWithDiacritics}) (\\d{4})`;
option2 = `(\\d{1,2}) (${wordWithDiacritics}) ka hatramin’ny (?:\\d{1,2}) (?:${wordWithDiacritics}) (\\d{4})`;
option3 = `(\\d{1,2}) (${wordWithDiacritics}) (\\d{4})`;
		// @ts-ignore
const wDatePatternTTM = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) Yebesua no October 21-27, 2024.; or 2) Yebesua no October 28–​November 3, 2024 ; or 3) Yebesua no December 30, 2024–​January 5, 2025
option1 = `(${wordWithDiacritics}) (\\d{1,2})[-–](?:\\d{1,2})?, (\\d{4})`;
option2 = `(${wordWithDiacritics}) (\\d{1,2})[-–](?:${wordWithDiacritics}) (?:\\d{1,2}), (\\d{4})`;
option3 = `(${wordWithDiacritics}) (\\d{1,2}), (\\d{4})`;
		// @ts-ignore
const wDatePatternTW = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) 40. Studienartikel: 9. bis 15. Dezember 2024; or 2) 43. Studienartikel: 30. Dezember 2024 bis 5. Januar 2025
		// @ts-ignore
option1 = `(\\d{1,2}).(?:${dateRangeSeparator})(?:\\d{1,2}).? (${wordWithDiacritics}) (\\d{4})`;
		// @ts-ignore
option2 = `(\\d{1,2}). (${wordWithDiacritics})(?:${dateRangeSeparator})(?:\\d{1,2}).? (?:${wordWithDiacritics}) (\\d{4})`;
option3 = `(\\d{1,2}). (${wordWithDiacritics}) (\\d{4})`;
		// @ts-ignore
const wDatePatternX = `${option1}|${option2}|${option3}`;

		// @ts-ignore
// date like 1-) Tutkitaan 3.–9.2.2025 ; or 2) Tutkitaan 24.2.–2.3.2025. ; or 3) Tutkitaan 30.12.2024–5.1.2025.
option1 = '(\\d{1,2}).[–](?:\\d{1,2}).(\\d{1,2}).(\\d{4})';
option2 = '(\\d{1,2}).(\\d{1,2}).[–](?:\\d{1,2}).(?:\\d{1,2}).(\\d{4})';
option3 = '(\\d{1,2}).(\\d{1,2}).(\\d{4})';
		// @ts-ignore
const wDatePatternFI = `${option1}|${option2}|${option3}`;

		// @ts-ignore
const wDatePatterns: LangRegExp = {
		// @ts-ignore
  common: new RegExp(wDatePatternCommon, 'giu'),
		// @ts-ignore
  CH: new RegExp(wDatePatternJ, 'giu'),
		// @ts-ignore
  CHS: new RegExp(wDatePatternJ, 'giu'),
		// @ts-ignore
  E: new RegExp(wDatePatternE, 'giu'),
		// @ts-ignore
  FI: new RegExp(wDatePatternFI, 'giu'),
		// @ts-ignore
  IL: new RegExp(wDatePatternE, 'giu'),
		// @ts-ignore
  J: new RegExp(wDatePatternJ, 'giu'),
		// @ts-ignore
  KO: new RegExp(wDatePatternKO, 'giu'),
		// @ts-ignore
  P: new RegExp(wDatePatternP, 'giu'),
		// @ts-ignore
  PGW: new RegExp(wDatePatternE, 'giu'),
		// @ts-ignore
  S: new RegExp(wDatePatternS, 'giu'),
		// @ts-ignore
  ST: new RegExp(wDatePatternX, 'giu'),
		// @ts-ignore
  SV: new RegExp(wDatePatternX, 'giu'),
		// @ts-ignore
  SW: new RegExp(wDatePatternE, 'giu'),
		// @ts-ignore
  T: new RegExp(wDatePatternT, 'giu'),
		// @ts-ignore
  TPO: new RegExp(wDatePatternTPO, 'giu'),
		// @ts-ignore
  TG: new RegExp(wDatePatternE, 'giu'),
		// @ts-ignore
  TTM: new RegExp(wDatePatternTTM, 'giu'),
		// @ts-ignore
  TW: new RegExp(wDatePatternTW, 'giu'),
		// @ts-ignore
  X: new RegExp(wDatePatternX, 'giu'),
};

// #endregion

		// @ts-ignore
// #region date parsing: add your language regular expression pattern if it is different than common, or use existing function if it matches your language
		// @ts-ignore
const wParsingCommon = (groups: string[]): WDateParsingResult => {
		// @ts-ignore
		// @ts-ignore
		// @ts-ignore
  let date: string, month: string, year: string;

  if (groups[1]) {
		// @ts-ignore
    date = groups[1];
		// @ts-ignore
    month = groups[2];
		// @ts-ignore
    year = groups[3];
  } else if (groups[4]) {
		// @ts-ignore
    date = groups[4];
		// @ts-ignore
    month = groups[5];
		// @ts-ignore
    year = groups[6];
  } else {
		// @ts-ignore
    date = groups[7];
		// @ts-ignore
    month = groups[8];
		// @ts-ignore
    year = groups[9];
  }

		// @ts-ignore
		// @ts-ignore
		// @ts-ignore
  return [year, month, date];
};

		// @ts-ignore
const wParsingE = (groups: string[]): WDateParsingResult => {
		// @ts-ignore
		// @ts-ignore
		// @ts-ignore
  let date: string, month: string, year: string;

  if (groups[1]) {
		// @ts-ignore
    month = groups[1];
		// @ts-ignore
    date = groups[2];
		// @ts-ignore
    year = groups[3];
  } else if (groups[4]) {
		// @ts-ignore
    month = groups[4];
		// @ts-ignore
    date = groups[5];
		// @ts-ignore
    year = groups[6];
  } else {
		// @ts-ignore
    month = groups[7];
		// @ts-ignore
    date = groups[8];
		// @ts-ignore
    year = groups[9];
  }

		// @ts-ignore
		// @ts-ignore
		// @ts-ignore
  return [year, month, date];
};

		// @ts-ignore
const wParsingJ = (groups: string[]): WDateParsingResult => {
		// @ts-ignore
		// @ts-ignore
		// @ts-ignore
  let date: string, month: string, year: string;

  if (groups[1]) {
		// @ts-ignore
    year = groups[1];
		// @ts-ignore
    month = groups[2];
		// @ts-ignore
    date = groups[3];
  } else {
		// @ts-ignore
    year = groups[5];
		// @ts-ignore
    month = groups[6];
		// @ts-ignore
    date = groups[7];
  }

		// @ts-ignore
		// @ts-ignore
		// @ts-ignore
  return [year, month, date];
};

		// @ts-ignore
const wDateParsing: WDateParsing = {
  common: wParsingCommon,
  CH: wParsingJ,
  CHS: wParsingJ,
  E: wParsingE,
  IL: wParsingE,
  J: wParsingJ,
  KO: wParsingJ,
  PGW: wParsingE,
  SW: wParsingE,
  TG: wParsingE,
  TW: wParsingE,
};

// #endregion

		// @ts-ignore
export const extractWTStudyDate = (src: string, lang: string) => {
  src = src
    .trim()
    .replace('  ', ' ')
    .replace('​', '')
    .replace('⁠', '')
    .replace(/\u200F/g, '');

  let finalSrc = src;

  const overrideLang = overrides[lang];

  if (overrideLang) {
    const overrideSrc = overrideLang[src];

    if (overrideSrc) {
      finalSrc = overrideSrc;
    }
  }

		// @ts-ignore
  const datePattern = wDatePatterns[lang] || wDatePatterns.common;

		// @ts-ignore
		// @ts-ignore
  const match = finalSrc.match(datePattern);

  if (!match) {
		// @ts-ignore
    throw new JWEPUBParserError('wtstudy', `Parsing failed for Watchtower Study Date. The input was: ${finalSrc}`);
  }

		// @ts-ignore
  const groups = Array.from(datePattern.exec(finalSrc)!);

		// @ts-ignore
  const parseDataFunc = wDateParsing[lang] || wDateParsing.common;
		// @ts-ignore
		// @ts-ignore
		// @ts-ignore
		// @ts-ignore
  let [year, month, date] = parseDataFunc(groups);

		// @ts-ignore
  if (isNaN(+month)) {
		// @ts-ignore
    const months = getMonthNames(lang);
		// @ts-ignore
    const monthIndex = months.find((record) => record.name.toLocaleLowerCase().includes(month.toLowerCase()))!.index;

		// @ts-ignore
    month = String(monthIndex + 1);
  }

		// @ts-ignore
		// @ts-ignore
		// @ts-ignore
  const result = `${year}/${String(month).padStart(2, '0')}/${String(date).padStart(2, '0')}`;

  return result;
};

// #endregion
