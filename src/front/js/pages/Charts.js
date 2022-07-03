import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "../component/navbar";
import { ChartLine } from "../component/ChartLine";
import { ChartLines } from "../component/ChartLines";
import { ChartBar } from "../component/ChartBar";
import { ChartPie } from "../component/ChartPie";
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
      <div className="position-relative">
        <div className="position-absolute top-50 start-50 translate-middle-x chart-body text-bg-charts text-bg-status">
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
          <ChartLine id="chartline" />
          {/* <p>Chartlines</p> */}
          {/* <ChartLines /> */}
          <ChartBar id="barchart" />
          {/* <ChartPie /> */}
        </div>
      </div>
    </div>
  );
};

export default Charts;