import { handleActions, createAction } from "redux-actions";

export const addPhotos = createAction("add gallery.photos");

export default handleActions(
  {
    [addPhotos]: (state, action) => ({
      ...state,
      photos: [...state.photos, ...action.payload],
    }),
  },
  {
    photos: [
      {
        src: "https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg",
        width: 2400,
        height: 1228,
        link: "/this-is-a-slug",
      },
      {
        src: "http://78.media.tumblr.com/tumblr_mecbjwZQUp1rzqsxoo1_500.jpg",
        width: 500,
        height: 750,
        link: "/this-is-a-slug",
      },
      {
        src: "https://photzy.com/assets/4657574571_4273c5ee0e_o.jpg",
        width: 700,
        height: 417,
        link: "/this-is-a-slug",
      },
      {
        src:
          "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/396525383_9140cca7c0_o.jpg?resize=610%2C565&ssl=1",
        width: 610,
        height: 565,
        link: "/this-is-a-slug",
      },
      {
        src: "https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg?v=1",
        width: 2400,
        height: 1228,
        link: "/this-is-a-slug",
      },
      {
        src: "http://78.media.tumblr.com/tumblr_mecbjwZQUp1rzqsxoo1_500.jpg?v=1",
        width: 500,
        height: 750,
        link: "/this-is-a-slug",
      },
      {
        src: "https://photzy.com/assets/4657574571_4273c5ee0e_o.jpg?v=1",
        width: 700,
        height: 417,
        link: "/this-is-a-slug",
      },
      {
        src:
          "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/396525383_9140cca7c0_o.jpg?resize=610%2C565&ssl=1?v=1",
        width: 610,
        height: 565,
        link: "/this-is-a-slug",
      },
      {
        src: "https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg?v=2",
        width: 2400,
        height: 1228,
        link: "/this-is-a-slug",
      },
      {
        src: "http://78.media.tumblr.com/tumblr_mecbjwZQUp1rzqsxoo1_500.jpg?v=2",
        width: 500,
        height: 750,
        link: "/this-is-a-slug",
      },
      {
        src: "https://photzy.com/assets/4657574571_4273c5ee0e_o.jpg?v=2",
        width: 700,
        height: 417,
        link: "/this-is-a-slug",
      },
      {
        src:
          "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/396525383_9140cca7c0_o.jpg?resize=610%2C565&ssl=1?v=2",
        width: 610,
        height: 565,
        link: "/this-is-a-slug",
      },
    ],
  },
);