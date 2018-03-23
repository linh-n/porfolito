import { createSelector } from "reselect";

const getLocale = state => state.ui.locale;
export const getLocaleState = createSelector([getLocale], locale => locale);

const getLayoutBackground = state => state.ui.layout.background;
export const getLayoutBackgroundState = createSelector([getLayoutBackground], locale => locale);
