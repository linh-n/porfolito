import React from "react";
import PropTypes from "prop-types";
import Gallery from "react-photo-gallery";
import Photo from "../Photo";

const GalleryComponent = ({ photos }) => (
  <div style={{ marginTop: 90 }}>
    <Gallery photos={photos} margin={20} ImageComponent={Photo} />
  </div>
);

GalleryComponent.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default GalleryComponent;
