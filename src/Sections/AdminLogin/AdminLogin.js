import React, { Component } from "react";
import Title from "../../components/Title/Title";

import AdminLoginImage from "../../assets/image_admin_login.svg";

import styles from "./index.module.scss";

export default class AdminLogin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleChange = e => {
		this.setState({
			...this.state,
			[e.target.id]: e.target.value
		});
		console.log(this.state);
	};

	handleClick = e => {
		e.preventDefault();
		console.log("login-action");
	};

	render() {
		return (
			<div className={styles["admin-login--container"]}>
				<div className={styles["admin-login--form-container"]}>
					<div>
						<Title text={"Admin Login"} />
						<div className={styles["admin-login--form-input-container"]}>
							<div className={styles["admin-login--form-label"]}>
								<label htmlFor="email">Email</label>
							</div>
							<input
								id="email"
								className={styles["admin-login--form-input"]}
								onChange={e => this.handleChange(e)}
								value={this.state.email}
								type="text"
								placeholder="someone@plattsburgh.edu"
							/>
						</div>
						<div className={styles["admin-login--form-input-container"]}>
							<div className={styles["admin-login--form-label"]}>
								<label htmlFor="email">Password</label>
							</div>
							<input
								id="password"
								className={styles["admin-login--form-input"]}
								onChange={e => this.handleChange(e)}
								value={this.state.password}
								type="password"
								placeholder="**********"
							/>
						</div>
						<div className={styles["admin-login--form-button-container"]}>
							<button>LOGIN</button>
						</div>
						<div className={styles["admin-login--link-main"]}>
							If you have any questions or would like to collaborate with us.
							Contact us through{" "}
							<a href="https://www.coding-hub.com" className={styles["red-link-text"]}>here.</a>
						</div>
					</div>
				</div>
				<div className={styles["admin-login--image-container"]}>
					<img
						src={AdminLoginImage}
						alt=""
						className={styles["admin-login--image"]}
					/>
				</div>
			</div>
		);
	}
}
