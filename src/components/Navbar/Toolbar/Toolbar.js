import React from "react";
import "./Toolbar.css";
import Logo from "../../../assets/ic_logo.png";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import GetAppButton from "../../../components/GetAppButton/GetAppButton";

const toolbar = props => (
  <div className="toolbar">
    <div className="toolbar_logo">
      <a href="/">
        <img src={Logo} alt="" />
      </a>
    </div>
    <div className="spacer" />
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandle} />
      </div>
      <div className="toolbar_navigation-items">
        <ul>
          {props.navItems.map(item => (
            <li key={item.id}>
              <a href={item.link} id={item.id}>
                {item.value}
              </a>
            </li>
          ))}
          <li>
            <GetAppButton />
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default toolbar;
