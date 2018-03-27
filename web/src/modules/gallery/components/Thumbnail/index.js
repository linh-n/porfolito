import React from "react";
import PropTypes from "prop-types";
import FadeIn from "react-lazyload-fadein";
import { Link } from "react-router-dom";

import styles from "./photo.module.css";

const Thumbnail = ({ margin, photo: { src, link, title, width, height } }) => (
  <div className={styles.photo} style={{ width, height, margin }}>
    <Link to={link}>
      <FadeIn height={height}>{onload => <img src={src} alt={title} onLoad={onload} />}</FadeIn>
    </Link>
    <div className={styles.desc}>{title && <div className={styles.title}>{title}</div>}</div>
  </div>
);

Thumbnail.propTypes = {
  margin: PropTypes.number.isRequired,
  photo: PropTypes.shape({
    src: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};

export default Thumbnail;
