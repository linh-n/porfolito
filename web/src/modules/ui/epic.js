import { replace, LOCATION_CHANGE } from "react-router-redux";
import { combineEpics } from "redux-observable";
import { extractLocaleFromPathname, changeLocationLocale } from "utils/url";
import { setLocale } from "./reducer";
import { getLocaleState, getAvailableLocalesState } from "./selectors";

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
          extractLocaleFromPathname(
            action.payload.pathname,
            getAvailableLocalesState(store.getState()),
          ),
    )
    .map(action => {
      if (!store.getState().ui.locale) {
        return setLocale(
          extractLocaleFromPathname(
            action.payload.pathname,
            getAvailableLocalesState(store.getState()),
          ),
        );
      }

      return replace(changeLocationLocale(action.payload, getLocaleState(store.getState())));
    });

export default combineEpics(setLocaleEpic, locationChangeEpic);
