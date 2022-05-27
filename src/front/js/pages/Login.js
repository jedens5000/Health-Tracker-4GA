import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import sunsetImg from "../../img/sunset.jpg";
import mindsetLogo from "../../img/mindset-logo.png";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div id="loginFormAndPhoto">
      <img id="loginPhoto" src={sunsetImg}></img>
      <form>
        <img className="logo" src={mindsetLogo} />
        <div>
          <p className="mt-3">Sign In</p>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckIndeterminate"
          ></input>
          <label className="form-check-label" for="flexCheckIndeterminate">
            Remember Me
          </label>
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
        <div className="d-flex justify-content-between">
          <Link to="/formForgotPassword">
            {" "}
            <div>ForgotPassword?</div>
          </Link>
          <Link to="/signup">
            <div>Don't have an account? Sign Up</div>
          </Link>
        </div>
      </form>
    </div>
  );
};