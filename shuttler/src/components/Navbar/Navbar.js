import React from "react";

import "../SideDrawer/DrawerToggleButton";
import "./Navbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { goToAnchor } from "react-scrollable-anchor";

const navbar = props => {
  return (
    <header className="navbar">
      <nav className="navbar_navigation">
        <div>
          <DrawerToggleButton click={props.navClickHandler} />
        </div>
        <div className="spacer" />
        <div className="navbar_logo">
          {/* <a className="main-logo" href="#testing">
            l
          </a> */}
          <img
            onClick={() => {
              goToAnchor("home");
            }}
            src={require("./ic_logo.png")}
            alt=""
          />
        </div>
      </nav>
    </header>
  );
};

export default navbar;
