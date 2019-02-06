import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="#home-scroll">Home</a>
        </li>
        <li>
          <a href="#about-scroll">About</a>
        </li>

        <li>
          <a href="#team-scroll">Team</a>
        </li>
        <li>
          <a href="#contact-scroll">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
