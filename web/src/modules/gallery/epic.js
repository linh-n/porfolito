import { goBack, push, LOCATION_CHANGE } from "react-router-redux";
import { combineEpics } from "redux-observable";
import { setLayoutBackground } from "modules/ui/reducer";
import { URL_VIEWING_PHOTO_REGEX } from "utils/url";
import { setViewingPhoto, closeViewingPhoto } from "./reducer";

const setViewingPhotoEpic = action$ =>
  action$
    .ofType(setViewingPhoto)
    .filter(action => action.payload !== null)
    .map(action => setLayoutBackground(action.payload.src));

const locationChangeEpic = (action$, store) =>
  action$
    .ofType(LOCATION_CHANGE)
    .filter(
      action =>
        (action.payload.pathname.match(URL_VIEWING_PHOTO_REGEX) &&
          store.getState().gallery.viewing === null) ||
        (!action.payload.pathname.match(URL_VIEWING_PHOTO_REGEX) &&
          store.getState().gallery.viewing !== null),
    )
    .map(action => {
      const matches = URL_VIEWING_PHOTO_REGEX.exec(action.payload.pathname);
      const payload =
        matches !== null && matches.length > 1 && matches[1].length > 0
          ? {
            id: matches[1],
            title: "Sunset at the lavender field",
            src: "https://blmparis.files.wordpress.com/2014/07/angle.jpg",
          }
          : null;
      return setViewingPhoto(payload);
    });

const closeViewingPhotoEpic = (action$, store) =>
  action$.ofType(closeViewingPhoto).map(() => {
    if (window.history.length > 1) {
      return goBack();
    }

    const currentLocale = store.getState().ui.locale;
    return push(`/${currentLocale}/gallery`);
  });

export default combineEpics(setViewingPhotoEpic, locationChangeEpic, closeViewingPhotoEpic);
