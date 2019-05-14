import React, { Component } from "react";
import "./Admin.css";
import SendButton from "../../components/SendButton/SendButton";
import Firebase from "../../components/Firebase/firebase";
import "firebase/firestore";
import Title from "../../components/Title/Title";
import NotificationImage from "../../assets/notificatio_image.png";

import Lottie from "react-lottie";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      message: "",
      date: "",
      isStopped: true,
      isPaused: true
    };
  }

  handleChange = e => {
    e.target.name === "title"
      ? this.setState({ title: e.target.value })
      : this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    const db = Firebase.firestore();
    // Add a new document in collection "cities"
    db.collection("notifications")
      .add({
        date: Date(),
        title: this.state.title,
        description: this.state.message
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);

        this.setState({
          title: "",
          message: "",
          date: "",
          isStopped: true,
          isPaused: true
        });
      })

      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const defaultOptions = {
      autoplay: false,
      loop: true,
      animationData: require("../../assets/send_button.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    const eventListeners = [
      {
        eventName: "loopComplete",
        callback: () => {
          this.handleSubmit();
          this.setState({ isPaused: true });
        }
      }
    ];

    return (
      <div className="admin-section">
        <Title text={"SEND NOTIFICATIONS?"} />
        <div className="admin-section_form">
          <div className="admin-section_form--col1">
            <img src={NotificationImage} alt="" />
          </div>
          <div className="admin-section_form--col2">
            <div className="admin-section_form--header">
              Please enter all details and click on send
            </div>
            <div className="admin-section_form--title">Title</div>
            <div className="admin-section_form--title_input">
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div className="admin-section_form--message">Message</div>
            <div className="admin-section_form--message_input">
              <textarea
                value={this.state.message}
                name="description"
                onChange={this.handleChange}
                type="text"
              />
            </div>
            <div className="admin-section_form--send_button">
              <SendButton click={this.handleSubmit} />
              {/* <Lottie
                options={defaultOptions}
                height={"120px"}
                width={"50px"}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
                eventListeners={eventListeners}
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
