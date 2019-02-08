import React from "react";
import "./Team.css";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

const team = props => {
  return (
    <ScrollableAnchor id={"team-scroll"}>
      <div className="containerTeam">
        <div className="teamPage">
          <div className="shadowBox">
            <h1>Team</h1>

            <div className="alignImg">
              <img
                src={require("./teamPic.jpg")}
                alt="teamPicture"
                width="600px"
              />
            </div>
            <br />

            <h3>Coding-Hub</h3>

            <h2>
              Coding Hub was co-founded in 2018 to develop mobile and web
              applications to provide services to students on the SUNY
              Plattsburgh campus. The main mission of the club is to make the
              lives of students easier with the use of software products.
            </h2>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
};

export default team;
