import { replace, LOCATION_CHANGE } from "react-router-redux";
import { combineEpics } from "redux-observable";
import { extractLocaleFromPathname } from "utils/url";
import { setLocale } from "./reducer";

const setLocaleEpic = (action$, store) =>
  action$.ofType(setLocale).map(action => {
    const [, , ...partsAfterLocale] = store.getState().router.location.pathname.split("/");
    const pathWithoutLocale =
      (partsAfterLocale.length > 0 ? `/${partsAfterLocale.join("/")}` : "") +
      store.getState().router.location.search;
    return replace(`/${action.payload}${pathWithoutLocale}`);
  });

const locationChangeEpic = (action$, store) =>
  action$
    .ofType(LOCATION_CHANGE)
    .filter(
      action =>
        !store.getState().ui.locale ||
        store.getState().ui.locale !== extractLocaleFromPathname(action.payload.pathname),
    )
    .map(action => {
      if (!store.getState().ui.locale) {
        return setLocale(extractLocaleFromPathname(action.payload.pathname));
      }

      const [, , ...partsAfterLocale] = action.payload.pathname.split("/");
      const pathWithoutLocale =
        (partsAfterLocale.length > 0 ? `/${partsAfterLocale.join("/")}` : "") +
        action.payload.search;
      return replace(`/${store.getState().ui.locale}${pathWithoutLocale}`);
    });

export default combineEpics(setLocaleEpic, locationChangeEpic);
