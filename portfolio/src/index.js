import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

//styles
import './index.css';
//import "./css/styles.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
//import "./assets/demo/demo.css";


//pages
import App from './App';
import HomePage from "./pages/home.js"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <HomePage {...props} />}/>
      {/* apply routed pages when created later*/}
    </Switch>
  
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
