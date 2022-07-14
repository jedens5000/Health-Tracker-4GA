import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const ChartBar = () => {
  const { store, actions } = useContext(Context);

  const issues = new Set();
  store.data.forEach((element) => {
    issues.add(element.issue);
  });
  const setArray = [...issues];
  console.log(issues);
  const dataArray = [];
  for (let i = 0; i < setArray.length; i++) {
    const newArray = store.data.filter((element) => {
      if (element.issue === setArray[i]) {
        return true;
      }
    });
    dataArray.push(newArray);
  }

  console.log(dataArray);

  ///////////////////////////////////
  // let data = [
  //   {
  //     date: dataArray[0][0].date.slice(0, 11),
  //     issue1: dataArray[0][0].value,
  //     issue2: dataArray[1][0].value,
  //     issue3: dataArray[2][0].value,
  //   },
  //   {
  //     date: dataArray[0][1].date.slice(0, 11),
  //     issue1: dataArray[0][1].value,
  //     issue2: dataArray[1][1].value,
  //     issue3: dataArray[2][1].value,
  //   },
  //   {
  //     date: dataArray[0][2].date.slice(0, 11),
  //     issue1: dataArray[0][2].value,
  //     issue2: dataArray[1][2].value,
  //     issue3: dataArray[2][2].value,
  //   },
  //   {
  //     date: dataArray[0][3].date.slice(0, 11),
  //     issue1: dataArray[0][3].value,
  //     issue2: dataArray[1][3].value,
  //     issue3: dataArray[2][3].value,
  //   },
  //   {
  //     date: dataArray[0][4].date.slice(0, 11),
  //     issue1: dataArray[0][4].value,
  //     issue2: dataArray[1][4].value,
  //     issue3: dataArray[2][4].value,
  //   },
  //   {
  //     date: dataArray[0][5].date.slice(0, 11),
  //     issue1: dataArray[0][5].value,
  //     issue2: dataArray[1][5].value,
  //     issue3: dataArray[2][5].value,
  //   },
  //   {
  //     date: dataArray[0][6].date.slice(0, 11),
  //     issue1: dataArray[0][6].value,
  //     issue2: dataArray[1][6].value,
  //     issue3: dataArray[2][6].value,
  //   },
  // ];

  const issue1 = dataArray[0][0].issue;
  const issue2 = dataArray[1][0].issue;
  const issue3 = dataArray[2][0].issue;

  return (
    <div>
      <div className="chart-wrapper">
        <p className="text-center chart-name">{issue1}</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={800}
            height={300}
            // data={data}
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
            {/* <Legend /> */}
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-wrapper">
        <p className="text-center chart-name">{issue2}</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={800}
            height={300}
            // data={data}
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
            {/* <Legend /> */}
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-wrapper">
        <p className="text-center chart-name">{issue3}</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={800}
            height={300}
            // data={data}
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
            {/* <Legend /> */}
            <Bar dataKey="value" fill="#888a9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
