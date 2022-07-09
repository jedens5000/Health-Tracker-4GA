import React from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
import { Navbar } from "../component/navbar";
import { ChartLine } from "../component/ChartLine";
import { ChartLine7 } from "../component/ChartLine7";
import { ChartArea } from "../component/ChartArea";
import { ChartArea7 } from "../component/ChartArea7";
import { ChartLines } from "../component/ChartLines";
import { ChartBar } from "../component/ChartBar";
import { ChartBar7 } from "../component/ChartBar7";
import { ChartPie } from "../component/ChartPie";
import { Stats } from "../component/Stats";
import chartBamboo from "../../img/bamboo8.jpg";

const Charts = () => {
  return (
    <div
      id="chart-h-100"
      // className="h-100"
      style={{
        backgroundImage: `url(${chartBamboo})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* <img id="chartPhoto" src={chartBamboo} alt="bamboo" /> */}
      <Navbar />
      {/* <div className="position-relative"> */}
      {/* <div className="position-absolute top-50 start-50 translate-middle-x chart-body text-bg-chart"> */}
      <div className="container position-relative mx-auto chart-body text-bg-chart">
        <Tabs
          defaultActiveKey="all"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="all" title="All Records">
            {/* <ChartArea7 /> */}
            <div className="row justify-content-evenly">
              <div className="col-5">
                <ChartArea id="chartarea" />
              </div>
              {/* <div className="col-1"></div> */}
              <div className="col-5">
                <ChartBar id="barchart" />
              </div>
            </div>
          </Tab>
          <Tab eventKey="7day" title="Last 7 Days">
            <ChartArea7 />
          </Tab>
          <Tab eventKey="14day" title="Last 14 Days">
            <ChartBar7 />
          </Tab>
          <Tab eventKey="30day" title="Last 30 Days">
            <ChartLine7 />
          </Tab>
          <Tab eventKey="stats" title="Stats">
            <Stats />
          </Tab>
          <Tab eventKey="pie" title="Chart Pie">
            <ChartPie />
          </Tab>
        </Tabs>

        {/* <Nav fill variant="tabs" defaultActiveKey="../component/ChartLine">
          <Nav.Item>
            <Nav.Link href="../component/ChartLine">Line Charts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="../component/ChartBar">Bar Charts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Pie Chart</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Table Grid</Nav.Link>
          </Nav.Item>
        </Nav> */}

        {/* <p>Chartline</p> */}

        {/* <p>Chartlines</p> */}
        {/* <ChartLines /> */}
        {/* <ChartPie /> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Charts;
