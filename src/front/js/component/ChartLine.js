import React, { useContext, useEffect, PureComponent } from "react";

import { Context } from "../store/appContext";
import {
  LineChart,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const ChartLine = () => {
  const { store, actions } = useContext(Context);

  const issues = new Set();
  store.data.forEach((element) => {
    issues.add(element.issue);
  });
  const setArray = [...issues];
  console.log(setArray);
  const dataArray = [];
  for (let i = 0; i < setArray.length; i++) {
    const newArray = store.data.filter((element) => {
      if (element.issue === setArray[i]) {
        element.date = element.date.split("").slice(0, 11).join(""); // Date reformat
        return true;
      }
    });
    // THIS WILL CHARGE dataArray to LAST 7 DAYS//////////////////////////////
    // const array7Days = newArray.slice(newArray.length - 7, newArray.length);
    // dataArray.push(array7Days);
    //////////////////////////////////////////////////////////////////////////
    dataArray.push(newArray);
  }

  console.log(dataArray);

  // const testArray = [...dataArray[0], ...dataArray[1], ...dataArray[2]];
  // console.log(testArray);
  const issue1 = dataArray[0][0].issue;
  const issue2 = dataArray[1][0].issue;
  const issue3 = dataArray[2][0].issue;
  console.log(issue1, issue2, issue3);

  return (
    <div className="chartline-bg">
      <div className="chart-wrapper">
        <p className="text-center chart-name">{issue1}</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={800}
            height={300}
            data={dataArray[0]}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            className={"chart-bg"}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-wrapper">
        <p className="text-center chart-name">{issue2}</p>
        <LineChart
          width={800}
          height={300}
          data={dataArray[1]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className={"chart-bg"}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
      <div className="chart-wrapper">
        <p className="text-center chart-name">{issue3}</p>
        <LineChart
          width={800}
          height={300}
          data={dataArray[2]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className={"chart-bg"}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};
