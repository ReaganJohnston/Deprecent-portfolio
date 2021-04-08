/*
=========================================================
* Coded by Reagan Johnston
=========================================================
*/

import React from "react";
import NavigationBar from "./../components/navbar.js";
import Header from "./../components/header.js"
import About from "./../pages/about.js"
import Projects from "./../pages/projects.js"

function HomePage(){
  return(
    <>
      <NavigationBar/>
      <div class="card-header">
        <Header />
      </div>
      <About/>
      <Projects/>
    </>
  );
}

export default HomePage;


/*      <About/>
      <Projects/>*/


