import React, { Component } from "react";
import SectionTop from "./Sections/SectionTop/Page1";
import SectionAbout from "./Sections/SectionAbout/AboutSection";
import SectionTeam from "./Sections/SectionTeam/Team";
import SectionContact from "./Sections/SectionContact/Contact";
import SectionNav from "./Sections/SectionNav/SectionNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SectionNav />
        <SectionTop />
        <SectionAbout />
        <SectionTeam />
        <SectionContact />
      </div>
    );
  }
}

export default App;
