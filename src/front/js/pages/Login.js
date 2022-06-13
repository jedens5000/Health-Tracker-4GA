import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import sunsetImg from "../../img/sunset.jpg";
import mindsetLogo from "../../img/mindset-logo.png";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    actions
      .login(email, password, history)
      .then(history.push("/main"))
      .catch((error) => {
        setError(error);
        console.log("This is my error", error);
      });
  };
  return (
    <div id="loginFormAndPhoto">
      <img id="loginPhoto" src={sunsetImg}></img>
      <form onSubmit={handleSubmit}>
        <img className="login-logo" src={mindsetLogo} />
        <div>
          <p className="mt-3">Sign In</p>
        </div>
        <div className="mb-3">
          <input
            type="text"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="form-control"
            id="inputEmail"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        {/* <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckIndeterminate"
          ></input>
          <label className="form-check-label" for="flexCheckIndeterminate">
            Remember Me
          </label>
        </div> */}
        {error && (
          <div className="alert alert-danger">
            <h6>{error.message}</h6>
          </div>
        )}
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary mb-3"
        >
          Submit
        </button>
        <div className="d-flex justify-content-between">
          <Link to="/signup">
            <div>Don't have an account? Sign Up</div>
          </Link>
          {/* <Link to="/formForgotPassword">
            {" "}
            <div>ForgotPassword?</div>
          </Link> */}
        </div>
      </form>
    </div>
  );
};
