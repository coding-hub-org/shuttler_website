import React, { useState } from "react";
import {makeAdmin} from "../../components/Firebase/firebase";
import styles from "../AdminLogin/index.module.scss";

const MakeAdmin = () => {
	const [email, setEmail] = useState("");
	return (
		<div>
			<div className={styles["admin-login--form-container"]}>
        <div className={styles["flex-grow"]}/>
				<div className={styles["admin-login--form-input-container"]}>
					<div className={styles["admin-login--form-label"]}>
						<label htmlFor="email">Email</label>
					</div>
					<input
						id="admin-email"
						className={styles["admin-login--form-input"]}
						onChange={e => setEmail(e.currentTarget.value)}
						value={email}
						type="email"
						placeholder="Email"
					/>
				</div>
				<div className={styles["admin-login--form-button-container"]}>
					<button onClick={() => {makeAdmin(email)}}>Make Admin</button>
				</div>
        <div className={styles["flex-grow"]}/>
			</div>
		</div>
	);
};

export default MakeAdmin;
