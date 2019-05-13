import React, { Component } from "react";
import WhySection from "../SectionWhy/WhySection";
import SectionTeam from "../SectionTeam/Team";
import SectionContact from "../SectionContact/Contact";
import Background from "../../components/Background/Background";

class Main extends Component {
  render() {
    return (
      <div>
        <Background />
        <WhySection />
        <SectionTeam />
        <SectionContact />
      </div>
    );
  }
}

export default Main;
