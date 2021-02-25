/*
=========================================================
* Coded by Reagan Johnston
* Utilising Paper Kit React - v1.2.0 frameworks
=========================================================
*/

import React from "react";
import NavigationBar from "./../components/navbar.js";
import Header from "./../components/header.js"

const imgStyle = {
  width: '98vw',
  height: '7vw',
}

function HomePage(){
  return(
    <>
    <NavigationBar />
    <div class="card-header">
      <Header />
    </div>

    <div class="body-card">
      <div className="bodyFrameworks"
        style={imgStyle}>
        <div className="card-description">
          <h4>Hello! my name is Reagan Johnston and I’m a software developer and offensive cyber-security analyst.
            Over the course of three years, I have learnt many skills, applications, frameworks and enumeration techniques to 
            develop myself and satisify my curiousity.</h4>
        </div>
      </div>
    </div>

    
    </>
  );
}

export default HomePage;



