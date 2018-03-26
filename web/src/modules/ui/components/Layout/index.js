import React from "react";
import PropTypes from "prop-types";
import "normalize.css";
import ScrollArea from "react-scrollbar";

import Sidebar from "../../containers/Sidebar";
import "./css/global.css";
import styles from "./css/layout.module.css";

const Layout = ({ children, background }) => (
  <div className={styles.wrapper}>
    <div className={styles.bg}>
      <img src={background} alt="" />
    </div>
    <div className={styles.layout}>
      <div className={styles.leftCol}>
        <Sidebar />
      </div>
      <div className={styles.rightCol}>
        <ScrollArea
          speed={0.8}
          className={styles.scrollArea}
          contentClassName={styles.scrollContent}
          horizontal={false}
        >
          {children}
        </ScrollArea>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
};

Layout.defaultProps = {
  children: undefined,
  background: undefined,
};
export default Layout;
