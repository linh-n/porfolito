import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavLi = props => {
  const { location, to, activeClassName } = props;
  const className = location.pathname === to ? activeClassName : "";
  return (
    <li className={`m-menu__item ${className}`}>
      <Link to={to} className="m-menu__link">
        <span className="m-menu__item-here" />
        <span className="m-menu__link-text">{props.children}</span>
      </Link>
    </li>
  );
};

NavLi.propTypes = {
  location: PropTypes.shape({}),
  to: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
  children: PropTypes.string,
};

NavLi.defaultProps = {
  location: { pathname: "" },
  activeClassName: undefined,
  children: undefined,
};

const Header = props => (
  <header className="m-grid__item m-header ">
    <div className="m-header__top" />
    <div className="m-header__bottom">
      <div
        className="m-container m-container--responsive m-container--xxl
        m-container--full-height m-page__container"
      >
        <div className="m-stack m-stack--ver m-stack--desktop">
          <div className="m-stack__item m-stack__item--middle m-stack__item--fluid">
            <button
              className="m-aside-header-menu-mobile-close
              m-aside-header-menu-mobile-close--skin-light"
              id="m_aside_header_menu_mobile_close_btn"
            >
              <i className="la la-close" />
            </button>
            <div
              id="m_header_menu"
              className="m-header-menu m-aside-header-menu-mobile
              m-aside-header-menu-mobile--offcanvas
              m-header-menu--skin-dark m-header-menu--submenu-skin-light
              m-aside-header-menu-mobile--skin-light
              m-aside-header-menu-mobile--submenu-skin-light"
            >
              <ul className="m-menu__nav m-menu__nav--submenu-arrow ">
                <NavLi
                  to="/"
                  className="m-menu__link"
                  activeClassName="m-menu__item--active"
                  location={props.location}
                >
                  Dashboard
                </NavLi>
                <NavLi
                  to="/albums"
                  className="m-menu__link"
                  activeClassName="m-menu__item--active"
                  location={props.location}
                >
                  Albums
                </NavLi>
                <NavLi
                  to="/photos"
                  className="m-menu__link"
                  activeClassName="m-menu__item--active"
                  location={props.location}
                >
                  Photos
                </NavLi>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  location: PropTypes.shape({}),
};

Header.defaultProps = {
  location: { pathname: "" },
};

export default Header;
