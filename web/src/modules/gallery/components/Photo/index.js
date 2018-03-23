import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./photo.module.css";

const Photo = ({ image, link, title, subtitle }) => (
  <div className={styles.photo}>
    <Link to={link}>
      <img src={image} alt={title} />
    </Link>
    {title && <div className={styles.title}>{title}</div>}
    {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
  </div>
);

Photo.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Photo.defaultProps = {
  title: undefined,
  subtitle: undefined,
};

export default Photo;
