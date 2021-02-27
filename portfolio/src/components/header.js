/*
=========================================================
* Coded by Reagan Johnston
* Utilising Paper Kit React - v1.2.0 frameworks
=========================================================
*/

import React, {Component} from "react";
import background from "./../assets/img/trial-image5.jpg";
import Typist from 'react-typist';



const imgStyle = {
  width: '98vw',
  height: '48vw',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}


export class Header extends Component{
render(){
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
            <Typist>
              Software Developer</Typist>
          </li>
        </div>
        <div className="header-sub2">
          <li>
            <h5>Cyber Security Specialist</h5>
          </li>
        </div>
    </div>

    </>
  )
}}

export default Header;
