import React from "react";

import "./Contact.css";
import Email from "../../assets/email.png";
import Phone from "../../assets/phone.png";
import firebase from "firebase";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import SendButton from "../../components/SendButton/SendButton";

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
      <ScrollableAnchor id={"Contact"}>
        <div className="Contact-component">
          <h1 className="contact-header">CONTACT US</h1>
          <div className="contact-body">
            <div className="contact-description">
              <h3>
                IF YOU HAVE ANY COMMENTS OR SUGESTIONS PLEASE CALL US OR SEND US
                AN EMAIL
              </h3>

              <div className="phone-sec" id="phoneNumDiv">
                <img className="phone-image" src={Phone} alt="" />
                <p className="labels">(845)-464-3900</p>
              </div>

              <div className="email-sec">
                <img className="email-image" src={Email} alt="" />
                <p className="labels">psucoders@plattsburgh.edu</p>
              </div>
            </div>

            <div className="contact-form">
              <form action="" id="contactForm">
                <p className="email-head">Email address</p>
                <input
                  onChange={this.handleChangeEmail}
                  className="email-input"
                  placeholder="Email Address"
                  type="text"
                  id="email"
                />{" "}
                <br /> <br />
                <p className="message-head">Request</p>
                <textarea
                  onChange={this.handleChangeMessage}
                  className="message-input"
                  type="text"
                  placeholder="Type your request..."
                  id="message"
                />
                <div className="sendButton-contactform">
                  <SendButton />
                </div>
              </form>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default contact;
