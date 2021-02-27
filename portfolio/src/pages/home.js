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
  height: '8vw',
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
        <div className="card-description-header">
          <h3>Hello! my name is Reagan Johnston, I’m a software developer and cyber-security analyst.</h3>
        </div>
        <div className="card-description-body">
          <h4> I am passionate about building excellent software and applying my current cyber-security knowledge in the world around me.
            Over the course of three years, I have learnt many skills, applications, frameworks and enumeration techniques to 
            develop myself and satisify my inherent curiousity.
             </h4>
        </div>
      </div>
    </div>
    <div class="Full-stack">

    </div>
    <div class= "Cyber-security">
      
    </div>
    
    </>
  );
}

export default HomePage;



