import React, { Component } from "react";

export const EmailReminder = () => (
  <div className="reminder-form-container">
    <form className="reminder-form">
      <div>
        <h5>
          Let us remind you to update your
          <br />
          Daily Status everyday
        </h5>
        <div className="mb-2">
          <input
            className="reminder-form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </div>
    </form>
  </div>
);
