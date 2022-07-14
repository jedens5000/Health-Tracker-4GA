import "@progress/kendo-theme-default/dist/all.css";
import "../../styles/app.css";
import React from "react"
import PickDateOfBirth from "../component/PickDateOfBirth";
import BookDrivingSlot from "../component/BookDrivingSlot";
import RoomScheduler from "../component/SMSForm";
function App() {
  return (
    <div className="App">
      <PickDateOfBirth />
      <hr className="k-my-8" />
      <BookDrivingSlot />
      <hr className="k-my-8" />
      <RoomScheduler />
    </div>
  );
}

export default App;