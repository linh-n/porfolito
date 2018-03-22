import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = ({ currentLocale, handleChangeLocale }) => (
  <header className={styles.header}>
    <nav>
      <div className="container">
        <Link to={`/${currentLocale}`} className="logo">
          <span>Trade</span>Helpdesk<sup>BETA</sup>
        </Link>
        <ul>
          <li>
            <Link className="nav-item" to={`/${currentLocale}/about`}>
              a
            </Link>
          </li>
        </ul>
        <div className="right">
          <div className="locale">
            <button onClick={() => handleChangeLocale("en")}>English</button>
            <span>/</span>
            <button onClick={() => handleChangeLocale("fr")}>Français</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
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
