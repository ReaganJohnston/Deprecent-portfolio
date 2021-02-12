/*
=========================================================
* Coded by Reagan Johnston
* Utilising Paper Kit React - v1.2.0 frameworks
=========================================================
*/

import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"
import "./../assets/css/nav.css"

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
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
      window.removeEventListener('scroll');
    }
   handleScroll= () => {
     if (window.pageYOffset > 140) {
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
    <div className={`Nav ${this.state.nav && 'Nav__black'}`}>
    <Navbar
      className={classnames("fixed-top")}
      expand="lg"
      color-on-scroll="300"
    >
      <div class="grid-container">
        <div className="navbar-left">
          <i className="changing-title"/> &#47;home
        </div>

        <div className="navbar-right">
          <Collapse
            className="justify-content-end"
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/home" tag={Link}>
                  <i className="navbar-home-layout"/> home(  )
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/work" tag={Link}>
                  <i className="navbar-work-layout"/> work(  )
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/about" tag={Link}>
                  <i className="navbar about-layout"/> about(  )
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/contact" tag={Link}>
                  <i className="navbar contact-layout"/> contact(  )
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/"
                target="_blank"
                title="Follow me on Instagram"
                >
                  <i className="nav insta"/>
                  <p className="nav placeholder-insta">Instagram</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                data-placement="bottom"
                href="https://linkedin.com"
                target="_blank"
                title="Follow me on LinkedIn"
                >
                  <i className="nav LinkedIn"/>
                  <p className="nav placeholder-LinkedIn">LinkedIn</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                data-placement="bottom"
                href="https://www.github.com"
                target="_blank"
                title="Check out my projects repo"
                >
                  <i className="nav Git"/>
                  <p className="nav placeholder-Git">GitHub</p>
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

/*
          <NavbarBrand
            data-placement="bottom"
            to="/home"
            target="_blank"
            title="Return Home"
            tag={Link}
          >Reagan Johnston</NavbarBrand>

          <button
            aria-expanded={navCollapse}
            onClick={toggleCollapse}
            className={classnames("navbar-toggler navbar-toggler",{
                toggled: navCollapse,
            })}
          >
            <span className="navbar-toggler-bar bar1"/>
            <span className="navbar-toggler-bar bar2"/>
            <span className="navbar-toggler-bar bar3"/>
          </button>*/

/*
  // //cosntants used across the whole function
  // const [navCollapse, setNavCollapse] = React.useState(false);
  // const [navColour, setNavColour] = React.useState("navbar-transparent");

  // const toggleCollapse = () => {
  //   document.documentElement.classList.toggle("nav-open");
  //   setNavCollapse(!navCollapse);
  // }


  // /*  code imported from kit-react, updates and changes the nav size depending on the size
  // of the window opened    */
  
  // React.useEffect(() => {
  //   const updateNavbarColor = () => {
  //     if (
  //       document.documentElement.scrollTop > 299 ||
  //       document.body.scrollTop > 299
  //     )
      
  //     {setNavColour("");} 
      
  //     else if (
  //       document.documentElement.scrollTop < 300 ||
  //       document.body.scrollTop < 300
  //     ) 
      
  //     {setNavColour("navbar-transparent");}
  //   };
  
  //   window.addEventListener("scroll", updateNavbarColor);
  
  //   return function cleanup() {
  //     window.removeEventListener("scroll", updateNavbarColor);
  //   };
  //   });