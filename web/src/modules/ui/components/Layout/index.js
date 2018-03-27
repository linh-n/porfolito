import React from "react";
import PropTypes from "prop-types";
import "normalize.css";
import { ScrollContext, ScrollContainer } from "react-router-scroll-4";

import Sidebar from "../../containers/Sidebar";
import "./css/global.css";
import styles from "./css/layout.module.css";

const Layout = ({ children, background }) => (
  <ScrollContext>
    <div className={styles.wrapper}>
      <div className={styles.bg} style={{ "background-image": `url(${background})` }} />
      <div className={styles.layout}>
        <div className={styles.leftCol}>
          <Sidebar />
        </div>
        <div className={styles.rightCol}>
          <ScrollContainer scrollKey="gallery-scroll" shouldUpdateScroll={() => false}>
            <div>{children}</div>
          </ScrollContainer>
        </div>
      </div>
    </div>
  </ScrollContext>
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
