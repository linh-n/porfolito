import { push, LOCATION_CHANGE } from "react-router-redux";
import { combineEpics } from "redux-observable";

import { setLocale } from "./reducer";

const availableLocales = []; // FIXME:

const extractLocaleFromUrl = pathname => {
  const [, localeInUrl] = pathname.split("/");
  return localeInUrl;
};

const setLocaleEpic = (action$, store) =>
  action$
    .ofType(setLocale)
    .filter(
      action => extractLocaleFromUrl(store.getState().router.location.pathname) !== action.payload,
    )
    .map(action => {
      const [, , ...partsAfterLocale] = store.getState().router.location.pathname.split("/");
      const pathWithoutLocale =
        (partsAfterLocale.length > 0 ? `/${partsAfterLocale.join("/")}` : "") +
        store.getState().router.location.search;
      return push(`/${action.payload}${pathWithoutLocale}`);
    });

const locationChangeEpic = (action$, store) =>
  action$
    .ofType(LOCATION_CHANGE)
    .filter(action => {
      const localeInUrl = extractLocaleFromUrl(action.payload.pathname);
      return localeInUrl !== store.getState().ui.locale && availableLocales.includes(localeInUrl);
    })
    .map(action => setLocale(extractLocaleFromUrl(action.payload.pathname)));

export default combineEpics(setLocaleEpic, locationChangeEpic);
