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
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return(
    <>
    <NavigationBar />
    <Header />
    </>
  );
}

export default HomePage;



