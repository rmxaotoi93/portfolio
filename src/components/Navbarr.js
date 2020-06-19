import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import {Nav, Navbar} from 'react-bootstrap' 
export class Navbarr extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
  
    render() {
        return (
            <div>
<div className="toggle"></div>
<div className="overlay"></div>
<div className="menu">
<nav className="nav" id="navbar" >
        <div className="nav-content ">
        
          <ul className="nav-items">
            <li className="nav-item">
              <Link
            className="aLink"
                activeClass="active"
                
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.scrollToTop}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
           className="aLink"
                activeClass="active"
                to="section1"
              
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="aLink"
                activeClass="active"
                to="section2"
             
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                 Skill
              </Link>
            </li>
            <li className="nav-item">
              <Link
            className="aLink"
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
            className="aLink"
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
</div>

            </div>
        )
    }
}

export default Navbarr
