import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/react";

import logo from "assets/images/logo.png";
import defaultAvatar from "assets/images/default_avatar.png";

import styles from "./Header.module.css";

const Header = ({ currentLocale, handleChangeLocale }) => (
  <header className={styles.header}>
    <nav>
      <div className="container">
        <Link to={`/${currentLocale}`} className="logo">
          <img src={logo} alt="Trade Helpdesk" />
          <span>Trade</span>Helpdesk<sup>BETA</sup>
        </Link>
        <ul>
          <li>
            <Link className="nav-item" to={`/${currentLocale}/about`}>
              <Trans>About</Trans>
            </Link>
          </li>
          <li>
            <Link className="nav-item" to={`/${currentLocale}/support-materials`}>
              <Trans>Support Materials</Trans>
            </Link>
          </li>
          <li>
            <Link className="nav-item" to={`/${currentLocale}/my-dashboard`}>
              <Trans>My dashboard</Trans>
            </Link>
          </li>
          <li>
            <Link className="nav-item" to={`/${currentLocale}/alerts`}>
              <Trans>Alerts</Trans>
            </Link>
          </li>
        </ul>
        <div className="right">
          <div className="locale">
            <button onClick={() => handleChangeLocale("en")}>English</button>
            <span>/</span>
            <button onClick={() => handleChangeLocale("fr")}>Français</button>
          </div>
          <div className="user">
            <img src={defaultAvatar} alt="" />
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
