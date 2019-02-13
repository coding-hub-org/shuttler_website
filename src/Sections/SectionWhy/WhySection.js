import React from "react";

import AboutCard from "../../components/AboutCard/AboutCard";
import "./WhySection.css";
import clock from "../../assets/ic_clock.png";
import map from "../../assets/ic_map.png";
import slider from "../../assets/ic_map-1.png";

import convenienceImg from "../../assets/convenience-img.png";
import realtimeImg from "../../assets/realtime-img.png";
import easyuseImg from "../../assets/easyuse-img.png";


import ScrollableAnchor from "react-scrollable-anchor";
import Title from "../../components/Title/Title";

const WhySection = props => {
  return (
    <ScrollableAnchor id={"About"}>
      <div className="why-section">
        <Title text={"Why Shuttler?"}/>
        <div className="why">
          <div className="whycard-component">
            <AboutCard
              image={convenienceImg}
              header={"CONVENIENCE"}
              text={
                "Never miss the shuttle ever again with our real-time tracking. Through the use of our app you can assure that you are never late for the shuttle again"
              }
            />
          </div>
          <div className="whycard-component">
            <AboutCard
              image={easyuseImg}
              header={"REAL TIME NOTIFICATIONS"}
              text={
                "Personalize your experience through our customizable notification system. Choose when and where you want to be notified"
              }
            />
          </div>
          <div className="whycard-component">
            <AboutCard
              image={realtimeImg}
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

export default WhySection;
