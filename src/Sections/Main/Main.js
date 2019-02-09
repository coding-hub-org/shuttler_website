import React, { Component } from "react";
import SectionAbout from "../SectionAbout/AboutSection";
import SectionTeam from "../SectionTeam/Team";
import SectionContact from "../SectionContact/Contact";
import Background from "../../components/Background/Background";

class Main extends Component {
  render() {
    return (
      <div>
        <Background />
        <SectionAbout />
        <SectionTeam />
        <SectionContact />
      </div>
    );
  }
}

export default Main;
