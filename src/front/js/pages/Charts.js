import React from "react";
import { Navbar } from "../component/navbar";
import { ChartLine } from "../component/ChartLine";
import { ChartLines } from "../component/ChartLines";
import { ChartBar } from "../component/ChartBar";
import { ChartPie } from "../component/ChartPie";

const Charts = () => {
  return (
    <div>
      <Navbar />
      <div className="position-relative">
        <div className="position-absolute top-50 start-50 translate-middle-x">
          <p>(Add Pill to change charts)</p>
          <p>Chartline</p>
          <ChartLine />
          <p>Chartlines</p>
          <ChartLines />
          <ChartBar />
          {/* <ChartPie /> */}
        </div>
      </div>
    </div>
  );
};

export default Charts;
