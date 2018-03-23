import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

import styles from "./sidebar.module.css";

const Header = ({ currentLocale, handleChangeLocale }) => (
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
            to={`/${currentLocale}`}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
            to={`/${currentLocale}/about`}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
            to={`/${currentLocale}/contact`}
          >
            Contact
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
        <button onClick={() => handleChangeLocale("en")}>english</button>
        <span>/</span>
        <button onClick={() => handleChangeLocale("fr")}>français</button>
      </div>
    </nav>
  </aside>
);

Header.propTypes = {
  handleChangeLocale: PropTypes.func,
  currentLocale: PropTypes.string,
};

Header.defaultProps = {
  handleChangeLocale: undefined,
  currentLocale: undefined,
};

export default Header;
