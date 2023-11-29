import React from "react";
import "../styles/SidebarData.css";
import { Link, NavLink } from "react-router-dom";

function SidebarData() {
  return (
    <>
      <div className="Navbars">
        <ul className="NavbarWrappers">
          <li className="NavbarElement">
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/about-us">
              About Us
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/contact-us">
              Contact Us
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="linkbtn" to="/login">
              login
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SidebarData;
