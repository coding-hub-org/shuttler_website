import React from "react";

import AboutCard from "../../components/AboutCard/AboutCard";
import "./AboutSection.css";
import clock from "../../assets/ic_clock.png";
import map from "../../assets/ic_map.png";
import slider from "../../assets/ic_map-1.png";
import ScrollableAnchor from "react-scrollable-anchor";

const aboutSection = props => {
  return (
    <ScrollableAnchor id={"About"}>
      <div className="About-component">
        <h2 className="about-header">ABOUT</h2>

        <div className="about">
          <div className="aboutcard-component">
            <AboutCard
              image={clock}
              header={"CONVENIENCE"}
              text={
                "Never miss the shuttle ever again with our real-time tracking. Through the use of our app you can assure that you are never late for the shuttle again"
              }
            />
          </div>
          <div className="aboutcard-component">
            <AboutCard
              image={map}
              header={"REAL TIME NOTIFICATIONS"}
              text={
                "Personalize your experience through our customizable notification system. Choose when and where you want to be notified"
              }
            />
          </div>
          <div className="aboutcard-component">
            <AboutCard
              image={slider}
              header={"EASY TO USE"}
              text={
                "View where the shuttle is in real time through our in-app Map."
              }
            />
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
};

export default aboutSection;
