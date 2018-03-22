import { createAction, handleActions } from "redux-actions";

export const setLocale = createAction("set ui.locale");
export default handleActions(
  {
    [setLocale]: (state, action) => ({
      ...state,
      locale: action.payload,
    }),
  },
  {
    locale: "en",
  },
);
