import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container" style={{ marginTop:"5%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<div className="card text-bg-primary mb-3" style={{maxWidth: "18rem"}}>
				<div className="card-header" style = {{display: "flex", justifyContent: "center"}}>Login</div>
				<div className="card-body" style = {{display: "flex", flexDirection: "column", textAlign: "center" }}>
					<h1 style = {{fontSize:"25px", fontFamily:"Raleway"}}>Email</h1>
					<input types="email" className="form-control" placeholder="Enter your email address"></input>
						<br></br>
					<h1 style = {{fontSize:"25px", fontFamily:"Raleway"}}>Password</h1>
					<input types="email" className="form-control" placeholder="Enter your email address"></input>
						<br></br>
					<div className = "forgotPasswordBtn">
						<button className="forgotPassword">ForgotPassword</button>
					</div>
					<div className = "signUpBtn">
					<Link to="/FormSignup">
						<button className="signUp">Sign Up</button>
						</Link>
					</div>
				</div>
			</div>

		</div>
	);
};

