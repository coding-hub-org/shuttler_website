import React from "react";

import AboutCard from "../AboutCard/AboutCard";
import "./AboutSection.css";
import clock from "../assets/ic_clock.png";
import map from "../assets/ic_map.png";
import slider from "../assets/ic_map-1.png";

const aboutSection = props => {
  return (
    <div>
      <div className="header">
        <h1>About</h1>
      </div>

      <div className="about">
        <AboutCard
          image={clock}
          header={"TIMOTHY INGRAM"}
          text={
            "Never miss the shuttle ever again with our real-time tracking. Through the use of our app you can assure that you are never late for the shuttle again"
          }
        />
        <AboutCard
          image={map}
          header={"TIMOTHY INGRAM"}
          text={
            "Personalize your experience through our customizable notification system. Choose when and where you want to be notified"
          }
        />
        <AboutCard
          image={slider}
          header={"TIMOTHY INGRAM"}
          text={
            "View where the shuttle is in real time through our in-app Map."
          }
        />
      </div>
    </div>
  );
};

export default aboutSection;
