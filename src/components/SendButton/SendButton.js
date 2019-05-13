import React from "react";
import "./SendButton.css";

const SendButton = (props) => {
  return (
    <div className="SendButton-component" onClick={props.click}>
      <div>SEND</div>
    </div>
  );
};

export default SendButton;
