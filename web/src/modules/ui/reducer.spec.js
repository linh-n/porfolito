import reducer, * as actions from "./reducer";

describe("UI Reducer", () => {
  it("should set locale", () => {
    const initialState = { locale: "en" };
    expect(reducer(initialState, actions.setLocale("fr"))).toEqual({ locale: "fr" });
  });
});
