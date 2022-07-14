import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Dropdown, DropdownButton, Tab, Tabs } from "react-bootstrap";
import { NavMenu } from "../component/navbar";
import { ChartLine } from "../component/ChartLine";
import { ChartLine7 } from "../component/ChartLine7";
import { ChartLine14 } from "../component/ChartLine14";
import { ChartLine30 } from "../component/ChartLine30";
import { ChartArea } from "../component/ChartArea";
import { ChartArea7 } from "../component/ChartArea7";
import { ChartArea14 } from "../component/ChartArea14";
import { ChartArea30 } from "../component/ChartArea30";
import { ChartLines } from "../component/ChartLines";
import { ChartBar } from "../component/ChartBar";
import { ChartBar7 } from "../component/ChartBar7";
import { ChartBar14 } from "../component/ChartBar14";
import { ChartBar30 } from "../component/ChartBar30";
import { ChartPie } from "../component/ChartPie";
import { Stats } from "../component/Stats";
import chartBamboo from "../../img/bamboo8.jpg";
import "../../styles/charts.css";

const Charts = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      // id="chart-h-100"
      // className="h-100"
      style={{
        backgroundImage: `url(${chartBamboo})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "150vh",
      }}
    >
      {/* <div> */}
      {/* <img id="chartPhoto" src={chartBamboo} alt="bamboo" /> */}
      <NavMenu />
      {/* <div className="position-relative"> */}
      {/* <div className="position-absolute top-50 start-50 translate-middle-x chart-body text-bg-chart"> */}
      <div className="container position-relative mx-auto chart-body text-bg-chart">
        {/* CHART SELECTOR BUTTON */}

        <DropdownButton id="dropdown-basic-button" title="Select Chart Type:">
          <Dropdown.Item
            onClick={() => actions.changeChart("chartarea")}
            // href="#/action-1"
          >
            Area Chart
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => actions.changeChart("chartbar")}
            // href="#/action-2"
          >
            Bar Chart
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => actions.changeChart("chartline")}
            // href="#/action-3"
          >
            Line Chart
          </Dropdown.Item>
        </DropdownButton>

        {/* CHART RANGE SELECTION TABS */}
        <Tabs
          defaultActiveKey="stats"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="stats" title="Stats">
            <div className="chart-bg">
              <Stats />
            </div>
            <ChartPie />
          </Tab>
          <Tab eventKey="all" title="All Records">
            {/* <div className="row justify-content-evenly">
              <div className="col-5">
                <ChartArea id="chartarea" />
              </div>
              <div className="col-5">
                <ChartBar id="barchart" />
              </div>
            </div> */}
            {store.chartType === "chartarea" ? (
              <ChartArea />
            ) : store.chartType === "chartbar" ? (
              <ChartBar />
            ) : store.chartType === "chartline" ? (
              <ChartLine />
            ) : (
              <ChartArea />
            )}
          </Tab>
          <Tab eventKey="7day" title="Last 7 Days">
            {store.chartType === "chartarea" ? (
              <ChartArea7 />
            ) : store.chartType === "chartbar" ? (
              <ChartBar7 />
            ) : store.chartType === "chartline" ? (
              <ChartLine7 />
            ) : (
              <ChartArea7 />
            )}
          </Tab>
          <Tab eventKey="14day" title="Last 14 Days">
            {store.chartType === "chartarea" ? (
              <ChartArea14 />
            ) : store.chartType === "chartbar" ? (
              <ChartBar14 />
            ) : store.chartType === "chartline" ? (
              <ChartLine14 />
            ) : (
              <ChartArea14 />
            )}
          </Tab>
          <Tab eventKey="30day" title="Last 30 Days">
            {store.chartType === "chartarea" ? (
              <ChartArea30 />
            ) : store.chartType === "chartbar" ? (
              <ChartBar30 />
            ) : store.chartType === "chartline" ? (
              <ChartLine30 />
            ) : (
              <ChartArea30 />
            )}
          </Tab>
          {/* <Tab eventKey="pie" title="Chart Pie">
            <ChartPie />
          </Tab> */}
        </Tabs>
      </div>
    </div>
  );
};

export default Charts;
