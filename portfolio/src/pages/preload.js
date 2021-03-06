/*
=========================================================
* Coded by Reagan Johnston
=========================================================
*/

import React from "react";
import { GooSpinner } from "react-spinners-kit";

function PreLoader(){
  return (
    <>
    <div className="Loading">
      <div className="Spinner">
        <GooSpinner 
        color="#682ae9"
        size={125}/>
      </div>
      <div className="Loading-text">
        <h4>Now Loading</h4>
      </div>
    </div>
    </>
  )
}

export default PreLoader;