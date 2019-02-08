import React from "react";
import "./Team.css";
import ScrollableAnchor from "react-scrollable-anchor";

const team = props => {
  return (
    <ScrollableAnchor id={"Team"}>
      <div className="team-component">
        <h1>TEAM</h1>
        <div className="shadowBox">
          <div className="shadowBox-description">
            <h3>CODING HUB</h3>
            <h2>
              Coding Hub was co-founded in 2018 to develop mobile and web
              applications to provide services to students on the SUNY
              Plattsburgh campus. The main mission of the club is to make the
              lives of students easier with the use of software products.
            </h2>
          </div>

          <div className="alignImg">
            <img src={require("./teamPic.jpg")} alt="teamPicture" />
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
};

export default team;
