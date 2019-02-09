import React from "react";
import "./DrawerToggleButton.css";

const drawerToggleButton = props => (
  <div className="toggle_button" onClick={props.click}>
    <div className="toggle_button_line_one" />
    <div className="toggle_button_line_two" />
    <div className="toggle_button_line_three" />
  </div>
);

export default drawerToggleButton;
