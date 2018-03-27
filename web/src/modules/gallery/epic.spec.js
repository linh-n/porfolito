import "rxjs";
import configureMockStore from "redux-mock-store";
import { createEpicMiddleware } from "redux-observable";
import { LOCATION_CHANGE } from "react-router-redux";

import epics from "./epic";
import { setViewingPhoto, closeViewingPhoto } from "./reducer";

const epicMiddleware = createEpicMiddleware(epics);
const mockStore = configureMockStore([epicMiddleware]);

describe("fetchUserEpic", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      router: {
        location: {
          pathname: "/en/about?param=value",
          search: "",
        },
      },
      gallery: {
        viewing: null,
        photos: [],
      },
      ui: {
        locale: "en",
      },
    });
  });

  afterEach(() => {
    epicMiddleware.replaceEpic(epics);
  });

  it("should set viewing photo on changing location", () => {
    const pushAction = {
      type: LOCATION_CHANGE,
      payload: {
        pathname: "/en/gallery/le-test",
        search: "",
        hash: "",
        key: "watiw",
      },
    };
    store.dispatch(pushAction);
    const [, setViewingPhotoAction] = store.getActions();
    expect(setViewingPhotoAction.type).toEqual(setViewingPhoto.toString());
  });

  it("should set viewing photo to undefined on changing to not matched location", () => {
    store = mockStore({
      router: {
        location: {
          pathname: "/en/about?param=value",
          search: "",
        },
      },
      gallery: {
        viewing: {},
        photos: [],
      },
      ui: {
        locale: "en",
      },
    });

    const pushAction = {
      type: LOCATION_CHANGE,
      payload: {
        pathname: "/en/about",
        search: "",
        hash: "",
        key: "watiw",
      },
    };
    store.dispatch(pushAction);
    const [, setViewingPhotoAction] = store.getActions();
    expect(setViewingPhotoAction).toEqual({ type: setViewingPhoto.toString(), payload: null });
  });

  it("should go back in history or go to gallery on setting viewing photo to null", () => {
    const closeViewingPhotoAction = {
      type: closeViewingPhoto,
      payload: null,
    };
    store.dispatch(closeViewingPhotoAction);
    const actions = store.getActions();
    expect(actions.length).toBeGreaterThan(1);
  });
});
