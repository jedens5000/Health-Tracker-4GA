import React from "react";
import { Navbar } from "../component/navbar";
import { ChartLine } from "../component/ChartLine";
import { ChartLines } from "../component/ChartLines";
import { ChartBar } from "../component/ChartBar";
import { ChartPie } from "../component/ChartPie";

const Charts = () => {
  return (
    <div className="chart-body">
      <Navbar />
      <div className="position-relative">
        <div className="position-absolute top-50 start-50 translate-middle-x">
          {/* <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Line Charts
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Bar Chart
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pie Chart
              </a>
            </li>
          </ul> */}
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
