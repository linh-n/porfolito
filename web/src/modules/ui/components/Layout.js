import React from "react";
import PropTypes from "prop-types";

import Header from "../containers/Header";
import Footer from "./Footer";
import Sponsors from "./Sponsors";

const Layout = ({ children, language }) => (
  <div>
    <Header />
    {language}
    {children}
    <Sponsors />
    <Footer />
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
