import React from "react";
import PropTypes from "prop-types";
import { changeLocationLocale } from "utils/url";
import styles from "./sidebar.module.css";

const LocaleButton = ({ locale, currentLocale, location, handleChangeLocale }) => (
  <a
    href={changeLocationLocale(location, locale)}
    className={`${styles.navLink} ${styles.locale} ${
      locale === currentLocale ? styles.navLinkActive : null
    }`}
    onClick={event => {
      event.preventDefault();
      handleChangeLocale(locale);
    }}
  >
    {locale}
  </a>
);

LocaleButton.propTypes = {
  handleChangeLocale: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  currentLocale: PropTypes.string.isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default LocaleButton;
