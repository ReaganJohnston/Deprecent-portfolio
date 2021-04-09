/*
=========================================================
* Coded by Reagan Johnston
* Utilising Paper Kit React - v1.2.0 frameworks
=========================================================
*/

import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { scroller } from "react-scroll";

import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";

class NavigationBar extends React.Component{
  listener = null;
  state = {
    nav:false
  }
  componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
   }
   componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
   handleScroll= () => {
     if (window.pageYOffset > 350) {
         if(!this.state.nav){
           this.setState({ nav: true });
         }
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
         }
     }
    } 

  render(){
  return(
    <div className={`Nav ${this.state.nav && 'Nav__white'}`}>
    <Navbar
      className={classnames("fixed-top")}
      expand="lg"
      color-on-scroll="300"
    >
      <div class="grid-container">
        <div className="navbar-left">
          <i className="changing-title"/> reagan&#95;johnston &#47; home
        </div>

        <div className="navbar-right">
          <Collapse
            className="justify-content-end"
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink onClick={() => scroller.scrollTo('home', {
                  smooth: true,
                  offset: -70,
                  duration: 500,
                })}>
                  <i className="navbar-home-layout"/> home(  )
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink onClick={() => scroller.scrollTo('about', {
                  smooth: true,
                  offset: -70,
                  duration: 500,
                })}>
                  <i className="navbar-work-layout"/> about(  )
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink onClick={() => scroller.scrollTo('projects', {
                  smooth: true,
                  offset: -70,
                  duration: 500,
                })}>
                  <i className="navbar about-layout"/> projects(  )
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink onClick={() => scroller.scrollTo('contact', {
                  smooth: true,
                  offset: -70,
                  duration: 500,
                })}>
                  <i className="navbar-contact-layout"/> contact(  )
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/"
                target="_blank"
                title="Follow me on Instagram"
                >
                  <i className="nav-insta"/>
                  <p className="nav-placeholder-insta">Instagram</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                data-placement="bottom"
                href="https://linkedin.com"
                target="_blank"
                title="Follow me on LinkedIn"
                >
                  <i className="nav-LinkedIn"/>
                  <p className="nav-placeholder-LinkedIn">LinkedIn</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                data-placement="bottom"
                href="https://www.github.com"
                target="_blank"
                title="Check out my projects repo"
                >
                  <i className="nav-Git"/>
                  <p className="nav-placeholder-Git">GitHub</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>      
      </div>
    </Navbar>
    </div>
  );
}}

export default NavigationBar;
