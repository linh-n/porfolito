import React from "react";
import PropTypes from "prop-types";
import FadeIn from "react-lazyload-fadein";
import { Link } from "react-router-dom";

import styles from "./photo.module.css";

const Photo = ({ margin, photo: { src, link, title, subtitle, width, height } }) => (
  <div className={styles.photo} style={{ width, height, margin }}>
    <Link to={link}>
      <FadeIn height={height} once>
        {onload => <img src={src} alt={title} onLoad={onload} />}
      </FadeIn>
    </Link>
    {title && <div className={styles.title}>{title}</div>}
    {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
  </div>
);

Photo.propTypes = {
  margin: PropTypes.number.isRequired,
  photo: PropTypes.shape({
    src: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};

export default Photo;
