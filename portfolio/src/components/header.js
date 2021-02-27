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
            <Typist
            cursor={{blink: true,
                      show: true,
                      element: '|'}}
            avgTypingDelay={100}>
              <span>Software Developer.</span>
              <Typist.Backspace count={20} delay={1250} />
              <span>Cyber Security Analyst.</span>
              <Typist.Backspace count={24} delay={1250} />
            </Typist>
          </li>
        </div>
        <div className="header-sub2">
          <li>
          </li>
        </div>
    </div>

    </>
  )
}}

export default Header;
