import React from "react";
import PropTypes from "prop-types";
import Gallery from "react-photo-gallery";
import { withContentRect } from "react-measure";
import { forceCheck } from "react-lazyload";
import { ScrollContainer } from "react-router-scroll-4";

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
      <ScrollContainer scrollKey="gallery-scroll" shouldUpdateScroll={() => false}>
        <div ref={measureRef} className={`${styles.gallery} ${hidden ? styles.hidden : ""}`}>
          <Gallery photos={photos} columns={columns} margin={margin} ImageComponent={Thumbnail} />
          {children}
        </div>
      </ScrollContainer>
    );
  }
}

GalleryComponent.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  children: PropTypes.node,
  hidden: PropTypes.bool,
  measureRef: PropTypes.shape({}),
  contentRect: PropTypes.shape({}),
};

GalleryComponent.defaultProps = {
  children: undefined,
  hidden: false,
  measureRef: null,
  contentRect: null,
};

export default withContentRect("bounds")(GalleryComponent);
