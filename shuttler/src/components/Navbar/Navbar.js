import React from "react";

import "../SideDrawer/DrawerToggleButton";
import "./Navbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const navbar = props => {
  return (
    <header className="navbar">
      <nav className="navbar_navigation">
        <div>
          <DrawerToggleButton click={props.navClickHandler} />
        </div>
        <div className="spacer" />
        <div className="navbar_logo">
          <img src={require("./ic_logo.png")} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default navbar;
