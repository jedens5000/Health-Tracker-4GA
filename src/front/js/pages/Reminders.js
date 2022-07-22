import React from "react";
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

      <EmailReminder />
    </div>
  );
}

export default Reminders;
