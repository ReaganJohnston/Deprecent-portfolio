import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//styles
import "./assets/css/header.css";
import "./assets/css/homepage.css";
import "./assets/css/index.css";
import "./assets/css/nav.css";
import "./assets/css/preload.css";

//pages
import App from './App';
import resume from './components/resume.js'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="" render={(props) => <App {...props} />}/>
      <Route path="/resume" component={resume}/>
    </Switch>
  
  </BrowserRouter>,
  document.getElementById('root')
);

