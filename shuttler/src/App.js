import React, { Component } from "react";
import SectionAbout from "./Sections/SectionAbout/AboutSection";
import SectionTeam from "./Sections/SectionTeam/Team";
import SectionContact from "./Sections/SectionContact/Contact";
import Background from "./components/Background/Background";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <SectionAbout />
        <SectionTeam />
        <SectionContact />
      </div>
    );
  }
}

export default App;
