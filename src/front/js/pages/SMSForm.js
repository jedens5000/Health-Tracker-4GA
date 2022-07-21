import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { NavMenu } from "../component/navbar";
import mainPageBackground from "../../img/bamboo7.jpg";

// Unfinished form to set up scheduled text reminders for 
// Dr. appointments, to sign in to the app to track wellness, medication reminders. 
// Need to set up twilio on the backend and get the scheduler to work with twilio. 
// Also need to change front end to properly set schedule.

const SMSForm = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");
  const { store, actions } = useContext(Context);
  return (
    <div
      className="h-100"
      style={{
        backgroundImage: `url(${mainPageBackground})`,
        backgroundSize: "cover",
      }}
    >
      <NavMenu />
      <form className="container-fluid position-relative text-bg-status">
        <div className="mt-3">
          <label htmlFor="to">To:</label>
          <input
            type="tel"
            name="to"
            id="to"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            name="body"
            id="body"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <textarea
            name="time"
            id="time"
            value={time}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            actions.reminders(phone, message);
          }}
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default SMSForm;
