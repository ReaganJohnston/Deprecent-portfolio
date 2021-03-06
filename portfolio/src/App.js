/*
=========================================================
* Coded by Reagan Johnston
=========================================================
*/

import './App.css';
import React, { useState, useEffect } from 'react';
import HomePage from "./pages/home.js";
import PreLoader from "./pages/preload.js";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)},[])

  return (
    <>
    {loading === false ? (
      <HomePage />
    ) : (<PreLoader />)}
    </>
  );
}

export default App;