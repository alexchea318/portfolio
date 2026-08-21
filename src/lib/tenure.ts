import type { Locale } from "@/lib/i18n";

/** Стаж считается с января 2018-го — с фриланса, а не с найма: заказы на сайты
 *  начались тогда. Число лет выводится из этой даты, поэтому не устаревает —
 *  оно пересчитывается на каждом рендере и на каждой сборке. */
export const TENURE_START = new Date(2018, 0, 1); // месяц с нуля → январь

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

/** Whole years since the start, rounded to the nearest half. */
export function tenureYears(now: Date = new Date()): number {
  const years = (now.getTime() - TENURE_START.getTime()) / MS_PER_YEAR;
  return Math.max(0, Math.round(years * 2) / 2);
}

/** Evaluated at module load: build time on the server, runtime in the browser. */
export const TENURE = tenureYears();

/** Склонение «год» под число.
 *
 *  Дробное число склоняется по целой части — так это и звучит в речи:
 *  «8,5 лет», «4,5 года». Единственная поправка — единица: «1,5 год» не говорят,
 *  там «года». */
function ruYearWord(n: number): string {
  if (!Number.isInteger(n)) {
    const word = ruYearWord(Math.trunc(n));
    return word === "год" ? "года" : word;
  }
  const d10 = n % 10;
  const d100 = n % 100;
  if (d10 === 1 && d100 !== 11) return "год";
  if (d10 >= 2 && d10 <= 4 && (d100 < 12 || d100 > 14)) return "года";
  return "лет";
}

/** Number formatted for the locale: comma decimals in RU, no trailing ".0". */
export function formatTenureNumber(n: number, lang: Locale): string {
  const s = Number.isInteger(n) ? String(n) : n.toFixed(1);
  return lang === "ru" ? s.replace(".", ",") : s;
}

/** Number + unit, e.g. "8,5 лет" / "8.5 years". */
export function tenurePhrase(lang: Locale, n: number = TENURE): string {
  const num = formatTenureNumber(n, lang);
  return lang === "ru" ? `${num} ${ruYearWord(n)}` : `${num} ${n === 1 ? "year" : "years"}`;
}

/** Just the unit word, e.g. "года" / "years". */
export function tenureUnit(lang: Locale, n: number = TENURE): string {
  return lang === "ru" ? ruYearWord(n) : n === 1 ? "year" : "years";
}
