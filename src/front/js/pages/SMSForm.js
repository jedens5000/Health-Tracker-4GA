import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
// import './SMSForm.css';

const SMSForm = () => {
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const { store, actions } = useContext(Context);
    return (
      <form>
        <div>
          <label htmlFor="to">To:</label>
          <input
            type="tel"
            name="to"
            id="to"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            name="body"
            id="body"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />
        </div>
        <button type="submit" onClick={()=>{actions.reminders(phone, message)}}>
          Send message
        </button>
      </form>
    );
  }


export default SMSForm;
