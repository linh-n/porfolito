import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import LocaleButton from "./LocaleButton";
import styles from "./sidebar.module.css";

const Header = ({ currentLocale, availableLocales, handleChangeLocale, location }) => (
  <aside className={styles.sidebar}>
    <nav>
      <Link to={`/${currentLocale}`} className={styles.logo}>
        thuyr
      </Link>
      <ul>
        <li>
          <NavLink
            exact
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
            to={`/${currentLocale}/gallery`}
          >
            <FormattedMessage id="sidebar.gallery" defaultMessage="Gallery" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
            to={`/${currentLocale}/about`}
          >
            <FormattedMessage id="sidebar.about" defaultMessage="About" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
            to={`/${currentLocale}/contact`}
          >
            <FormattedMessage id="sidebar.contact" defaultMessage="Contact" />
          </NavLink>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <a className={styles.navLink} href="#1" target="_blank">
            Facebook
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#1" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#1" target="_blank">
            Flickr
          </a>
        </li>
      </ul>
      <hr />
      <p className={styles.text}>+41 79 876 67 89</p>
      <p className={styles.text}>linh@mail.ch</p>
      <hr />
      <div className={styles.locales}>
        {availableLocales.map(locale => (
          <LocaleButton
            key={locale}
            locale={locale}
            currentLocale={currentLocale}
            handleChangeLocale={handleChangeLocale}
            location={location}
          />
        ))}
      </div>
    </nav>
  </aside>
);

Header.propTypes = {
  handleChangeLocale: PropTypes.func.isRequired,
  currentLocale: PropTypes.string.isRequired,
  availableLocales: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default Header;
