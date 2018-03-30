import { createSelector } from "reselect";

const getLocale = state => state.ui.locale;
const getMessages = state => state.ui.messages;
const getAvailableLocales = state => state.ui.availableLocales;
const getLayoutBackground = state => state.ui.layout.background;

export const getLocaleState = createSelector([getLocale], locale => locale);
export const getAvailableLocalesState = createSelector([getAvailableLocales], locales => locales);
export const getLayoutBackgroundState = createSelector([getLayoutBackground], locale => locale);
export const getCurrentLocaleMessages = createSelector(
  [getLocale, getMessages],
  (locale, messages) => messages[locale],
);
