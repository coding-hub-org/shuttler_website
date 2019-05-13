import React from "react";
import "./Team.css";
import ScrollableAnchor from "react-scrollable-anchor";
import Title from "../../components/Title/Title";

const team = props => {
  return (
    <ScrollableAnchor id={"Team"}>
      <div className="team-component">
        <Title text={"the team"} />
        <div className="shadowBox">
          <div className="shadowBox-description">
            <h3>CODING HUB</h3>
            <p>
              Coding Hub is an organization founded in september 2018. 
              We develop software solutions, mobile and web applications, to 
              improve the services offered to students on the SUNY
              Plattsburgh campus. The main mission of the club is to make the
              lives of students easier with the use of software products.
              Currently, we are a team of 6 developers. Learn more about us 
              at <a href="https://www.coding-hub.com">www.coding-hub.com</a>
            </p>
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
