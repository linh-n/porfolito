import React from "react";
import PropTypes from "prop-types";
import Gallery from "react-photo-gallery";
import { withContentRect } from "react-measure";
import { forceCheck } from "react-lazyload";

import Thumbnail from "../Thumbnail";
import styles from "./gallery.module.css";

class GalleryComponent extends React.Component {
  componentDidUpdate() {
    forceCheck();
  }

  render() {
    const { photos, children, hidden, measureRef, contentRect } = this.props;

    let margin = 10;
    let columns = 3;

    if (contentRect.bounds.width < 800) {
      margin = 5;
      columns = 2;
    }

    return (
      <div ref={measureRef} className={`${styles.gallery} ${hidden ? styles.hidden : ""}`}>
        <Gallery photos={photos} columns={columns} margin={margin} ImageComponent={Thumbnail} />
        {children}
      </div>
    );
  }
}

GalleryComponent.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  children: PropTypes.node,
  hidden: PropTypes.bool,
  measureRef: PropTypes.any, // eslint-disable-line
  contentRect: PropTypes.any, // eslint-disable-line
};

GalleryComponent.defaultProps = {
  children: undefined,
  hidden: false,
};

export default withContentRect("bounds")(GalleryComponent);
