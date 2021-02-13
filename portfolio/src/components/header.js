/*
=========================================================
* Coded by Reagan Johnston
* Utilising Paper Kit React - v1.2.0 frameworks
=========================================================
*/

import React from "react";
import {Container} from "reactstrap"
import background from "./../assets/img/trial-image5.jpg"



const imgStyle = {
  width: '99vw',
  height: '45vw',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}

function Header(){
  return(
    <>
    <div
      className="page-header"
      style={imgStyle}
      >
        <div className="header-title">
          <h1><i>Reagan Johnston</i></h1>
        </div>
        <div className="header-sub1">
          <li>
            <h5>Frontend Software Developer</h5>
          </li>
        </div>
        <div className="header-sub2">
          <li>
            <h5>Aspiring Cyber Security Specialist</h5>
          </li>
        </div>
    </div>

    </>
  )
}

export default Header;
