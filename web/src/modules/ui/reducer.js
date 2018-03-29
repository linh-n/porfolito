import { createAction, handleActions } from "redux-actions";

export const setLocale = createAction("set ui.locale");
export const setMessages = createAction("set ui.messages");
export const setAvailableLocales = createAction("set ui.availableLocales");
export const setLayoutBackground = createAction("set ui.layout.background");

export default handleActions(
  {
    [setLocale]: (state, action) => ({
      ...state,
      locale: action.payload,
    }),
    [setMessages]: (state, action) => ({
      ...state,
      messages: action.payload,
    }),
    [setAvailableLocales]: (state, action) => ({
      ...state,
      availableLocales: action.payload,
    }),
    [setLayoutBackground]: (state, action) => ({
      ...state,
      layout: {
        ...state.layout,
        background: action.payload,
      },
    }),
  },
  {
    locale: undefined,
    availableLocales: undefined,
    layout: {
      background:
        "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/396525383_9140cca7c0_o.jpg", // FIXME:
    },
  },
);
