import { createSelector } from "reselect";

const getLocale = state => state.ui.locale;
export default createSelector([getLocale], locale => locale);
