import React from "react";
import { Layout } from "modules/ui";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    width: 2400,
    height: 1228,
  },
  {
    src: "http://78.media.tumblr.com/tumblr_mecbjwZQUp1rzqsxoo1_500.jpg",
    width: 500,
    height: 750,
  },
  {
    src: "https://photzy.com/assets/4657574571_4273c5ee0e_o.jpg",
    width: 700,
    height: 417,
  },
  {
    src:
      "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/396525383_9140cca7c0_o.jpg?resize=610%2C565&ssl=1",
    width: 610,
    height: 565,
  },
  {
    src: "https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg?v=1",
    width: 2400,
    height: 1228,
  },
  {
    src: "http://78.media.tumblr.com/tumblr_mecbjwZQUp1rzqsxoo1_500.jpg?v=1",
    width: 500,
    height: 750,
  },
  {
    src: "https://photzy.com/assets/4657574571_4273c5ee0e_o.jpg?v=1",
    width: 700,
    height: 417,
  },
  {
    src:
      "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/396525383_9140cca7c0_o.jpg?resize=610%2C565&ssl=1?v=1",
    width: 610,
    height: 565,
  },
  {
    src: "https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg?v=2",
    width: 2400,
    height: 1228,
  },
  {
    src: "http://78.media.tumblr.com/tumblr_mecbjwZQUp1rzqsxoo1_500.jpg?v=2",
    width: 500,
    height: 750,
  },
  {
    src: "https://photzy.com/assets/4657574571_4273c5ee0e_o.jpg?v=2",
    width: 700,
    height: 417,
  },
  {
    src:
      "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/396525383_9140cca7c0_o.jpg?resize=610%2C565&ssl=1?v=2",
    width: 610,
    height: 565,
  },
];

export default () => (
  <Layout>
    <div style={{ marginTop: 90 }}>
      <Gallery photos={photos} margin={20} />
    </div>
  </Layout>
);
