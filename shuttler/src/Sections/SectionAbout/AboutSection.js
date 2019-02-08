import React from "react";

import AboutCard from "../../components/AboutCard/AboutCard";
import "./AboutSection.css";
import clock from "../../assets/ic_clock.png";
import map from "../../assets/ic_map.png";
import slider from "../../assets/ic_map-1.png";
import ScrollableAnchor from "react-scrollable-anchor";

const aboutSection = props => {
  return (
    <ScrollableAnchor id={"about-scroll"}>
      <div className="About-component">
        <div className="about">
          <h2 className="about-header">About</h2>
          <AboutCard
            image={clock}
            header={"Convenience"}
            text={
              "Never miss the shuttle ever again with our real-time tracking. Through the use of our app you can assure that you are never late for the shuttle again"
            }
          />
          <AboutCard
            image={map}
            header={"Real Time Notifications"}
            text={
              "Personalize your experience through our customizable notification system. Choose when and where you want to be notified"
            }
          />
          <AboutCard
            image={slider}
            header={"Easy to Use"}
            text={
              "View where the shuttle is in real time through our in-app Map."
            }
          />
        </div>
      </div>
    </ScrollableAnchor>
  );
};

export default aboutSection;
