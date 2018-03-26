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
      background:
        "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/396525383_9140cca7c0_o.jpg", // FIXME:
    },
  },
);
