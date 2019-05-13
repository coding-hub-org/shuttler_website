import React, { Component } from "react";
import "./Admin.css";
import SendButton from "../../components/SendButton/SendButton";

class Admin extends Component {
  render() {
    return (
      <div className="admin-section">
        <div className="admin-section_title">SEND NOTIFICATIONS</div>
        <div className="admin-section_form">
          <div className="admin-section_form--header">
            Please enter all details and click on send
          </div>
          <div className="admin-section_form--title">Title</div>
          <div className="admin-section_form--title_input">
            <input type="text" />
          </div>
          <div className="admin-section_form--message">Message</div>
          <div className="admin-section_form--message_input">
            <textarea type="text" />
          </div>
          <div className="admin-section_form--send_button">
            <SendButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
