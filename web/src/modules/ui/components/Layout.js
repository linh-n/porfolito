import React from "react";
import PropTypes from "prop-types";
import { I18nProvider } from "@lingui/react";
import catalogs from "locale/catalogs";

import Header from "../containers/Header";
import Footer from "./Footer";
import Sponsors from "./Sponsors";

const Layout = ({ children, language }) => (
  <I18nProvider language={language} catalogs={catalogs}>
    <Header />
    {children}
    <Sponsors />
    <Footer />
  </I18nProvider>
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
