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
import { goToTop } from "react-scrollable-anchor";

// scroll to top of the page

class App extends Component {
  componentDidMount() {
    configureAnchors({
      offset: -5,
      scrollDuration: 800,
      keepLastAnchorHash: false
    });
    goToTop();
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
      <div className="App">
        <Navbar navClickHandler={this.navToggleClickHandler} />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {backdrop}
        <main>
          <Page1 />
          <div>
            <AboutSection />
          </div>
          <Spacer />
          <Spacer />
          <Spacer />
          <div>
            <TeamPage />
          </div>
          <Spacer />
          <Spacer />
          <Spacer />

          <div>
            <Contact />
          </div>
          <Spacer />
        </main>
      </div>
    );
  }
}

export default App;
