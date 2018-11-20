import React from "react";

import "./Contact.css";
import Phone from "../assets/phone.png";

const contact = props => {
  return (
    <div className="Contact-component">
      <h1 className="about-header">Contact Us</h1>
      <h3>
        IF YOU HAVE ANY COMMENTS OR SUGESTIONS PLEASE CALL US OR SEND US AN
        EMAIL
      </h3>
      <div className="phone-sec">
        <img className="phone" src={Phone} alt="" />

        <p className="labels">(845)-464-3900</p>
      </div>
      <div className="phone-sec">
        <img className="phone" src={Phone} alt="" />

        <p className="labels">psucoders@plattsburgh.edu</p>
      </div>
      <div className="phone-sec">

        <form action="">
          <p className="email-head">email</p>
          <input className="mail" type="text"/> <br/> <br/>
          <textarea className="message" type="text"/>
        </form>
      </div>
    </div>
  );
};

export default contact;
