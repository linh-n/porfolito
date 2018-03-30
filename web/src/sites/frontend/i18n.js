import en from "react-intl/locale-data/en";
import vi from "react-intl/locale-data/vi";

import viMessages from "i18n/vi.json";

export const availableLocales = ["en", "vi"];
export const localesData = [...en, ...vi];
export const messages = { vi: viMessages };
