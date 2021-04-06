/*
=========================================================
* Coded by Reagan Johnston
=========================================================
*/

import React from "react";
import NavigationBar from "./../components/navbar.js";
import Header from "./../components/header.js"
import AboutSection from "./../pages/about.js"

function HomePage(){
  return(
    <>
      <NavigationBar/>
      <div class="card-header">
        <Header />
      </div>
      <AboutSection/>
    </>
  );
}

export default HomePage;



