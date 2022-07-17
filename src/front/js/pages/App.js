// import "@progress/kendo-theme-default/dist/all.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../styles/app.css";
import React from "react";
// import PickDateOfBirth from "../component/PickDateOfBirth";
// import BookDrivingSlot from "../component/BookDrivingSlot";
// import RoomScheduler from "../component/SMSForm";
import chartBamboo from "../../img/bamboo8.jpg";
import { NavMenu } from "../component/navbar";


function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${chartBamboo})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "200vh",
      }}
    >
      <NavMenu />
      {/* <div className="App"> */}
      {/* <PickDateOfBirth /> */}
      {/* <hr className="k-my-8" />
      <BookDrivingSlot /> */}
      {/* <hr className="k-my-8" /> */}
      {/* <RoomScheduler />
    </div> */}
      <div className="form-container">
        <form className="form form-reminders">
          <div
            style={{
              background: "rgba(182, 215, 179, 0.8)",
              border: "1px solid #495159",
              borderRadius: "3%",
              color: "#495159",
              height: "30%",
              width: "100%",
              padding: "10%",
            }}
          >
            <h5>Sign up for our daily Email reminder</h5>
            <div className="mb-3">
              <label className="form-label"></label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <button type="submit" className="btn btn-primary mb-3">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
</div>
)}

export default App;
