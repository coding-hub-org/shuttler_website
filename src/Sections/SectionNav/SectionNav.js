import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/Backdrop/Backdrop";
import "./SectionNav.css";

class SectionNav extends Component {
  state = {
    SideDrawerOpen: false
  };

  navToggleClickHandler = () => {
    this.setState(prevState => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="Navbar-section">
        <Navbar navClickHandler={this.navToggleClickHandler} />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

export default SectionNav;
