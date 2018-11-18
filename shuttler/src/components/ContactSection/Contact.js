import React from "react";

import "./Contact.css";
import Phone from '../assets/phone.png';


const contact = props => {
  return (
    <div className="Contact-component">
        <h1 className="about-header">Contact Us</h1>
        <h3>IF YOU HAVE ANY COMMENTS OR SUGESTIONS PLEASE CALL US OR SEND US AN EMAIL</h3>
        <div className="phone-email">
          <img className="phone" src={Phone} alt=""/>
          <p className="phone-num">(845)-464-3900</p>
        </div>
    </div>
    
  );
};

export default contact;
