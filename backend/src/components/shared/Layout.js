import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";

class Layout extends React.Component {
  componentWillMount() {
    document.getElementsByTagName("body")[0].className =
      "m-page--wide m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default";
  }

  render() {
    return (
      <div className="m-grid m-grid--hor m-grid--root m-page">
        <Header location={this.props.location} />
        <div
          className="m-grid__item m-grid__item--fluid  m-grid m-grid--ver-desktop m-grid--desktop
              m-container m-container--responsive m-container--xxl m-page__container m-body"
        >
          <div className="m-grid__item m-grid__item--fluid m-wrapper">
            {this.props.title && (
              <div className="m-subheader ">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                    <h3 className="m-subheader__title ">{this.props.title}</h3>
                  </div>
                </div>
              </div>
            )}
            <div className="m-content">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.shape({}),
  location: PropTypes.shape({}),
};

Layout.defaultProps = {
  title: undefined,
  children: undefined,
  location: {},
};

export default Layout;
