import React from "react";

import "./Contact.css";
import Email from "../../assets/email.png";
import Phone from "../../assets/phone.png";
import firebase from "firebase";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

class contact extends React.Component {
  state = {
    email: "",
    emailMessage: ""
  };

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleChangeMessage = event => {
    this.setState({
      emailMessage: event.target.value
    });

    //
  };

  handleSubmit = event => {
    const { email, emailMessage } = this.state;

    const db = firebase.firestore();

    this.setState({
      email: "",
      emailMessage: ""
    });

    db.collection("ContactShuttler")
      .add({
        email: email,
        emailMesssage: emailMessage
      })

      .then(function(docRef) {
        console.log("Done");
      });
  };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDMzJ0endDzY-fWZMg87gRY2Uvga9qLt5g",
      authDomain: "shuttlewebsite.firebaseapp.com",
      projectId: "shuttlewebsite"
    });
  }
  render() {
    return (
      <ScrollableAnchor id={"contact-scroll"}>
        <div className="Contact-component">
          <h1 className="about-header">Contact Us</h1>
          <h3>
            IF YOU HAVE ANY COMMENTS OR SUGESTIONS PLEASE CALL US OR SEND US AN
            EMAIL
          </h3>
          <div className="phone-sec" id="phoneNumDiv">
            <img className="phone" src={Phone} alt="" />

            <p className="labels">(845)-464-3900</p>
          </div>
          <div className="phone-sec">
            <img className="email" src={Email} alt="" />

            <p className="labels">psucoders@plattsburgh.edu</p>
          </div>
          <div className="phone-sec">
            <form action="" id="contactForm">
              <p className="email-head">Your Email</p>
              <input
                onChange={this.handleChangeEmail}
                className="mail"
                type="text"
                id="email"
              />{" "}
              <br /> <br />
              <p className="email-head">Message</p>
              <textarea
                onChange={this.handleChangeMessage}
                className="message"
                type="text"
                id="message"
              />
              <br />
              <i
                onClick={this.handleSubmit}
                class="far fa-envelope"
                id="icon"
              />
            </form>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default contact;
