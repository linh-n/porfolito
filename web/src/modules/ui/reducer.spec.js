import reducer, * as actions from "./reducer";

describe("UI Reducer", () => {
  it("should set locale", () => {
    const initialState = { locale: "en" };
    expect(reducer(initialState, actions.setLocale("fr"))).toEqual({ locale: "fr" });
  });

  it("should set layout background", () => {
    const initialState = { layout: { background: "init background" } };
    const expectedState = { layout: { background: "set background" } };
    expect(reducer(initialState, actions.setLayoutBackground("set background"))).toEqual(
      expectedState,
    );
  });
});
