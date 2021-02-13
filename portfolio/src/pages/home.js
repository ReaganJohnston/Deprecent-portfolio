/*
=========================================================
* Coded by Reagan Johnston
* Utilising Paper Kit React - v1.2.0 frameworks
=========================================================
*/

import React from "react";
import NavigationBar from "./../components/navbar.js";
import Header from "./../components/header.js"

function HomePage(){
  return(
    <>
    <NavigationBar />
    <div class="card-header">
      <Header />
    </div>
    </>
  );
}

export default HomePage;



