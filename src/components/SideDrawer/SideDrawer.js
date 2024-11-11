import React from "react";
import "./SideDrawer.css";
import { Link } from "react-scroll";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="home-scroll">Home</Link>
        </li>
        <li>
          <Link to="about-scroll">About</Link>
        </li>

        <li>
          <Link to="team-scroll">Team</Link>
        </li>
        <li>
          <Link to="contact-scroll">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
