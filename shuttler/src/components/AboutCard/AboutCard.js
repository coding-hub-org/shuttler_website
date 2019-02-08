import React from "react";

import "./AboutCard.css";

const aboutCard = props => {
  return (
    <div className="card">
      <div className="card-contents">
        <img src={props.image} alt="" />
        <p className="header">
          <b>{props.header}</b>
        </p>
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
};

export default aboutCard;
