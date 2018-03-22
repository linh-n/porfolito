import React from "react";
import PropTypes from "prop-types";

import Header from "../containers/Header";

const Layout = ({ children, language }) => (
  <div>
    <Header />
    {language}
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  language: PropTypes.string,
};

Layout.defaultProps = {
  children: undefined,
  language: undefined,
};
export default Layout;
