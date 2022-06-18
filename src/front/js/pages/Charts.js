import React from "react";
import { Navbar } from "../component/navbar";
import { ChartLines } from "../component/ChartLines";
import { ChartBar } from "../component/ChartBar";

const Charts = () => {
  return (
    <div>
      <Navbar />
      <div className="position-relative">
        <div className="position-absolute top-50 start-50 translate-middle-x">
          <p>Charts (Add Pill to change charts)</p>
          <ChartLines />
          <ChartBar />
        </div>
      </div>
    </div>
  );
};

export default Charts;
