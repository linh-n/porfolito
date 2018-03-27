import { goBack, push, LOCATION_CHANGE } from "react-router-redux";
import { combineEpics } from "redux-observable";
import { setLayoutBackground } from "modules/ui/reducer";
import { setViewingPhoto, closeViewingPhoto } from "./reducer";

const URL_REGEX = /\/.*?\/gallery\/(.*)/;

const setViewingPhotoEpic = action$ =>
  action$
    .ofType(setViewingPhoto)
    .filter(action => action.payload !== null)
    .map(action => setLayoutBackground(action.payload.src));

const locationChangeEpic = action$ =>
  action$.ofType(LOCATION_CHANGE).map(action => {
    const matches = URL_REGEX.exec(action.payload.pathname);
    const payload =
      matches !== null && matches.length > 1 && matches[1].length > 0
        ? {
          id: matches[1],
          title: "Sunset at the lavender field",
          src:
              "http://1.bp.blogspot.com/-tQzkfgKTuc8/Ua0czIExNtI/AAAAAAAAAoc/bfNmSUN9NC4/s1600/000_3666.JPG",
        }
        : null;
    return setViewingPhoto(payload);
  });

const closeViewingPhotoEpic = (action$, store) =>
  action$.ofType(closeViewingPhoto).map(() => {
    if (window.history.length > 1) return goBack();

    const currentLocale = store.getState().ui.locale;
    return push(`/${currentLocale}/gallery`);
  });

export default combineEpics(setViewingPhotoEpic, locationChangeEpic, closeViewingPhotoEpic);
