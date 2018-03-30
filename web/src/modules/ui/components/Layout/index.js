import React from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";
import "normalize.css";
import { ScrollContext } from "react-router-scroll-4";

import Sidebar from "../../containers/Sidebar";
import "./global.css";
import styles from "./layout.module.css";

const Layout = ({ children, background, locale, messages }) => (
  <IntlProvider locale={locale} messages={messages}>
    <ScrollContext>
      <div className={styles.wrapper}>
        <div className={styles.bg} style={{ backgroundImage: `url(${background})` }} />
        <div className={styles.layout}>
          <div className={styles.leftCol}>
            <Sidebar />
          </div>
          <div className={styles.rightCol}>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </ScrollContext>
  </IntlProvider>
);

Layout.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  locale: PropTypes.string,
  messages: PropTypes.shape({}),
};

Layout.defaultProps = {
  children: undefined,
  background: undefined,
  locale: "en",
  messages: undefined,
};
export default Layout;
