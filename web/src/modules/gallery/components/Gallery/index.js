import React from "react";
import PropTypes from "prop-types";
import Gallery from "react-photo-gallery";

import Thumbnail from "../Thumbnail";
import styles from "./gallery.module.css";

const GalleryComponent = ({ photos, children, hidden }) => (
  <div className={`${styles.gallery} ${hidden ? styles.hidden : ""}`}>
    <Gallery photos={photos} margin={20} ImageComponent={Thumbnail} />
    {children}
  </div>
);

GalleryComponent.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  children: PropTypes.node,
  hidden: PropTypes.bool,
};

GalleryComponent.defaultProps = {
  children: undefined,
  hidden: false,
};

export default GalleryComponent;
