import { replace, LOCATION_CHANGE } from "react-router-redux";
import { combineEpics } from "redux-observable";
import { extractLocaleFromPathname, changeLocationLocale } from "utils/url";
import { setLocale } from "./reducer";

const setLocaleEpic = (action$, store) =>
  action$
    .ofType(setLocale)
    .map(action => replace(changeLocationLocale(store.getState().router.location, action.payload)));

const locationChangeEpic = (action$, store) =>
  action$
    .ofType(LOCATION_CHANGE)
    .filter(
      action =>
        !store.getState().ui.locale ||
        store.getState().ui.locale !==
          extractLocaleFromPathname(action.payload.pathname, store.getState().ui.availableLocales),
    )
    .map(action => {
      if (!store.getState().ui.locale) {
        return setLocale(
          extractLocaleFromPathname(action.payload.pathname, store.getState().ui.availableLocales),
        );
      }

      return replace(changeLocationLocale(action.payload, store.getState().ui.locale));
    });

export default combineEpics(setLocaleEpic, locationChangeEpic);
