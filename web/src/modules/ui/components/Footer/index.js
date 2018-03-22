import React from "react";

import logoSeco from "./images/seco.png";

export default () => (
  <footer>
    <div className="container">
      <div className="info">
        <div className="row">
          <div className="col-6">
            International Trade Centre (ITC)<br />Palais des Nations, 1211 Geneva 10, Switzerland
            <br />
            Tel.: +41 (0)22 730 05 86
            <br />tradehelpdesk@intracen.org<br /> Copyright © 2018 International Trade Centre. All
            rights reserved.
          </div>
          <div className="col-6">
            Sponsored by: <br />
            <img src={logoSeco} alt="" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);
