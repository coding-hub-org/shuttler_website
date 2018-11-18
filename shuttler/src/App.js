import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Page1 from "./components/Page1HomeMobile/Page1";
import AboutSection from "./components/AboutSection/AboutSection";
import Spacer from "./components/Spacer/Spacer";
import TeamPage from "./components/TeamPage/Team";
<<<<<<< Updated upstream
import ContactPage from './components/ContactSection/Contact';
=======
import ContactPage from "./components/ContactPage/ContactPage";
>>>>>>> Stashed changes

class App extends Component {
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
          <Spacer />
          <Page1 />
          <Spacer />
          <AboutSection />
          <Spacer />
          {/* <TeamPage /> */}
<<<<<<< Updated upstream
          <Spacer />
          <ContactPage />

=======
          <ContactPage />
>>>>>>> Stashed changes
        </main>
      </div>
    );
  }
}

export default App;
