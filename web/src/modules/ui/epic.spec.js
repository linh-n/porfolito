import "rxjs";
import configureMockStore from "redux-mock-store";
import { createEpicMiddleware } from "redux-observable";
import { LOCATION_CHANGE } from "react-router-redux";

import epics from "./epic";
import { setLocale } from "./reducer";

const epicMiddleware = createEpicMiddleware(epics);
const mockStore = configureMockStore([epicMiddleware]);

describe("UI epic", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      router: {
        location: {
          pathname: "/en/about?param=value",
          search: "",
        },
      },
      ui: {
        locale: "en",
      },
    });
  });

  afterEach(() => {
    epicMiddleware.replaceEpic(epics);
  });

  it("should change location after setting locale", () => {
    store.dispatch(setLocale("fr"));
    const actions = store.getActions();
    const [, pushAction] = actions;
    expect(actions).toHaveLength(2);
    expect(pushAction.payload.args).toEqual(["/fr/about?param=value"]);
  });

  it("should set new locale on changing location", () => {
    const pushAction = {
      type: LOCATION_CHANGE,
      payload: {
        pathname: "/fr/about",
        search: "",
        hash: "",
        key: "watiw",
      },
    };
    store.dispatch(pushAction);
    const [, setLocaleAction] = store.getActions();
    expect(setLocaleAction.payload).toEqual("fr");
  });
});
