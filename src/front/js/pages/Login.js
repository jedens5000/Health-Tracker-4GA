import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import sunsetImg from "../../img/sunset.jpg";
import mindsetLogo from "../../img/mindset-logo-clear.png";
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
      .login(email, password)
      .then((resp) => {
        if (resp == true) history.push("/main");
      })
      .catch((error) => {
        setError(error);
        console.log("This is my error", error);
      });
  };
  return (
    <div className="login-bg">
      <img id="loginPhoto" src={sunsetImg} alt="sunset" />
      <form className="login-form" onSubmit={handleSubmit}>
        <Link to="/">
          <img className="login-logo" src={mindsetLogo} alt="mindset logo" />
        </Link>
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
          <Link to="/signup" className="login-link">
            <div>Don't have an account? Sign Up</div>
          </Link>
        </div>
      </form>
    </div>
  );
};
