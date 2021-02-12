/*
=========================================================
* Coded by Reagan Johnston
* Utilising Paper Kit React - v1.2.0 frameworks
=========================================================
*/

import React from "react";
import {Container} from "reactstrap"
import background from "./../assets/img/main-image.jpg"


const imgStyle = {
  width: '100vw',
  height: '50vw',
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
        <div className="filter"/>
        <div className="content-center">
          <Container>
            <div className="title-brand">

            </div>
          </Container>
        </div>
    </div>

    </>
  )
}

export default Header;
