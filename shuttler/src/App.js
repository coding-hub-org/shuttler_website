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
      offset: -10,
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
          <ScrollableAnchor>
            <div>
              <span>l</span>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={"home-scroll"}>
            <div>
              <span>test</span>
            </div>
          </ScrollableAnchor>
          <Page1 />
          <ScrollableAnchor id={"about-scroll"}>
            <div>
              <AboutSection />
            </div>
          </ScrollableAnchor>
          <Spacer />
          <Spacer />

          <Spacer />
          <ScrollableAnchor id={"team-scroll"}>
            <div>
              <TeamPage />
            </div>
          </ScrollableAnchor>
          <Spacer />
          <Spacer />
          <Spacer />

          <Spacer />
          <Spacer />
          <ScrollableAnchor id={"contact-scroll"}>
            <div>
              <Contact />
            </div>
          </ScrollableAnchor>
          <Spacer />

          <Spacer />
        </main>
      </div>
    );
  }
}

export default App;
