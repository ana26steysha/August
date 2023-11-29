import React, { useState } from "react";
import { SidebarData } from "../component/SidebarData";
import "../styles/MoveBar.css";
import { IconContext } from "react-icons";
import { Link, NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
//import logo from "../images/gmail-google.png";
function MoveBar({ clicked, isClicked }) {
  const handleClicked = () => {
    isClicked(!clicked);
    console.log("clicked");
  };
  return (
    <div className="Nav">
      <ul className="NavbarWrapper">
        <li className="NavLogo">
          {/*<div className="logo">
            <img src={logo} alt="" />
  </div>*/}
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/">
            Home
          </NavLink>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/about-us">
            About Us
          </NavLink>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/contact-us">
            Contact Us
          </NavLink>
        </li>

        <li className="NavButton">
          <NavLink className="Link" to="/login">
            login
          </NavLink>
        </li>
        <li
          className="NavElements"
          style={{ float: "right", margin: "-8px 2px 1px 2px" }}
        ></li>
      </ul>
      {!clicked ? (
        <GiHamburgerMenu onClick={handleClicked} className="Icon" />
      ) : (
        <ImCross onClick={handleClicked} className="Icon" />
      )}
    </div>
  );
}

export default MoveBar;
