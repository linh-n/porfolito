import React from "react";

import logoItc from "./images/itc-logo-footer.png";
import logoUnctad from "./images/unctad-logo.png";
import logoWto from "./images/wto-logo.png";
import logoUnido from "./images/UNIDO.png";
import logoIdb from "./images/idb.png";
import logoFao from "./images/fao-logo.png";
import logoWco from "./images/wco_logo.png";
import logoWb from "./images/world-bank-logo.png";
import logoUndesa from "./images/undesa.png";

export default () => (
  <div className="logos">
    <div className="container">
      <a href="#sponsor">
        <img src={logoItc} alt="" />
      </a>
      <a href="#sponsor">
        <img src={logoUnctad} alt="" />
      </a>
      <a href="#sponsor">
        <img src={logoWto} alt="" />
      </a>
      <a href="#sponsor">
        <img src={logoUnido} alt="" />
      </a>
      <a href="#sponsor">
        <img src={logoIdb} alt="" />
      </a>
      <a href="#sponsor">
        <img src={logoFao} alt="" />
      </a>
      <a href="#sponsor">
        <img src={logoWco} alt="" />
      </a>
      <a href="#sponsor">
        <img src={logoWb} alt="" />
      </a>
      <a href="#sponsor">
        <img src={logoUndesa} alt="" />
      </a>
    </div>
  </div>
);
