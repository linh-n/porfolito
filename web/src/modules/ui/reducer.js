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
    layout: {
      background: "https://photzy.com/assets/4657574571_4273c5ee0e_o.jpg?v=1", // FIXME:
    },
  },
);
