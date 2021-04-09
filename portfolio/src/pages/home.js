/*
=========================================================
* Coded by Reagan Johnston
=========================================================
*/

import React from "react";
import NavigationBar from "./../components/navbar.js";
import Header from "./../components/header.js"
import About from "./../components/about.js"
import Projects from "./../components/projects.js"
import Contact from "./../components/contact.js"

function HomePage(){
  return(
    <>
      <NavigationBar/>
      <div class="card-header">
        <Header />
      </div>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default HomePage;


