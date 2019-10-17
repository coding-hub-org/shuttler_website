import React, { Component } from "react";
import "./Admin.css";
import SendButton from "../../components/SendButton/SendButton";
import {
	sendNotification,
	checkAdmin,
	signOut
} from "../../components/Firebase/firebase";
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
		if (this.state.title === "" || this.state.message === "") {
			alert("Cant be empty");
		} else {
			sendNotification(this.state.title, this.state.message);
			this.setState({
				title: "",
				message: "",
				date: "",
				isStopped: true,
				isPaused: true
			});
		}
	};

	render() {
		const defaultOptions = {
			autoplay: false,
			loop: true,
			animationData: require("../../assets/send_animation.json"),
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

		return checkAdmin() ? (
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
						<form className="admin-section_form--form">
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
						</form>
						<div className="admin-section_form--send_button">
							<SendButton click={this.handleSubmit} />
							<Lottie
								options={defaultOptions}
								height={"120px"}
								width={"50px"}
								isStopped={this.state.isStopped}
								isPaused={this.state.isPaused}
								eventListeners={eventListeners}
							/>
						</div>
					</div>
				</div>
			</div>
		) : (
			<div onClick={signOut}>button</div>
		);
	}
}

export default Admin;
