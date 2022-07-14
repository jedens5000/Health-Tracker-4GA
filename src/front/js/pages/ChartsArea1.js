import React from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
import { NavMenu } from "../component/navbar";
import { ChartLine } from "../component/ChartLine";
import { ChartLine7 } from "../component/ChartLine7";
import { ChartArea } from "../component/ChartArea";
import { ChartArea7 } from "../component/ChartArea7";
import { ChartArea14 } from "../component/ChartArea14";
import { ChartArea30 } from "../component/ChartArea30";
import { ChartLines } from "../component/ChartLines";
import { ChartBar } from "../component/ChartBar";
import { ChartBar7 } from "../component/ChartBar7";
import { ChartPie } from "../component/ChartPie";
import { Stats } from "../component/Stats";
import chartBamboo from "../../img/bamboo8.jpg";
import "../../styles/charts.css";

const ChartsArea1 = () => {
  return (
    <div
      // id="chart-h-100"
      className="h-100"
      style={{
        backgroundImage: `url(${chartBamboo})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      {/* <div> */}
      {/* <img id="chartPhoto" src={chartBamboo} alt="bamboo" /> */}
      <NavMenu />
      {/* <div className="position-relative"> */}
      {/* <div className="position-absolute top-50 start-50 translate-middle-x chart-body text-bg-chart"> */}
      <div className="container position-relative mx-auto chart-body text-bg-chart">
        <Tabs
          defaultActiveKey="stats"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="stats" title="Stats">
            <div className="chart-bg">
              <Stats />
            </div>
            <ChartPie />
          </Tab>
          {/* <Tab eventKey="all" title="All Records">
            <div className="row justify-content-evenly">
              <div className="col-5">
                <ChartArea id="chartarea" />
              </div>
              <div className="col-5">
                <ChartBar id="barchart" />
              </div>
            </div>
          </Tab> */}
          <Tab eventKey="all" title="All Records">
            <ChartArea />
          </Tab>
          <Tab eventKey="7day" title="Last 7 Days">
            <ChartArea7 />
          </Tab>
          <Tab eventKey="14day" title="Last 14 Days">
            <ChartArea14 />
          </Tab>
          <Tab eventKey="30day" title="Last 30 Days">
            <ChartArea30 />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ChartsArea1;
