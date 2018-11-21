import React, { Component } from "react";

import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
// import ScrollableAnchor from "react-scrollable-anchor";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

import Page1 from "./components/Page1HomeMobile/Page1";
import AboutSection from "./components/AboutSection/AboutSection";
import Spacer from "./components/Spacer/Spacer";
import TeamPage from "./components/TeamPage/Team";
import Contact from "./components/ContactSection/Contact";
import spacer from "./components/Spacer/Spacer";

class App extends Component {
  componentWillMount() {
    configureAnchors({ offset: 70, scrollDuration: 800 });
  }
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
      <div style={{ height: "100%" }} className="App">
        <Navbar navClickHandler={this.navToggleClickHandler} />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {backdrop}
        <main>
          <ScrollableAnchor id={"home"}>
            <div />
          </ScrollableAnchor>
          <Page1 />

          <ScrollableAnchor id={"about-scroll"}>
            <div />
          </ScrollableAnchor>
          <Spacer />
          <Spacer />

          <AboutSection />
          <Spacer />
          <ScrollableAnchor id={"team-scroll"}>
            <div />
          </ScrollableAnchor>
          <Spacer />
          <Spacer />
          <Spacer />
          <TeamPage />
          <Spacer />
          <Spacer />
          <ScrollableAnchor id={"contact-scroll"}>
            <div />
          </ScrollableAnchor>
          <Spacer />

          <Spacer />

          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
