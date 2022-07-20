// import "@progress/kendo-theme-default/dist/all.css";
import React from "react";
// import PickDateOfBirth from "../component/PickDateOfBirth";
// import BookDrivingSlot from "../component/BookDrivingSlot";
// import RoomScheduler from "../component/SMSForm";
import chartBamboo from "../../img/bamboo8.jpg";
import { NavMenu } from "../component/navbar";
import { EmailReminder } from "../component/EmailReminder";

function Reminders() {
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
      <EmailReminder />
    </div>
  );
}

export default Reminders;
