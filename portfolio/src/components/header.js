/*
=========================================================
* Coded by Reagan Johnston
* Utilising Paper Kit React - v1.2.0 frameworks
=========================================================
*/

import React from "react";
import {Container} from "reactstrap"
import background from "./../assets/img/uriel-soberanes.jpg"

function Header(){
  return(
    <>
    <div
      className="page-header section-dark"
      style={{backgroundImage: `url(${background})`}}
      >
      </div>
    </>
  )
}

export default Header;
