import { availableLocales } from "locale/catalogs";

let locale = (
  (navigator.languages
    ? navigator.languages[0]
    : window.navigator.userLanguage || window.navigator.language) || "en"
).toLowerCase();

if (!availableLocales.includes(locale)) {
  locale = locale.substr(2);
}

if (!availableLocales.includes(locale)) {
  locale = "en";
}

const prefLocale = locale;
export default prefLocale;
