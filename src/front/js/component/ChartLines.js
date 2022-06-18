import React, { useContext, PureComponent } from "react";
import { Context } from "../store/appContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const ChartLines = () => {
  const { store, actions } = useContext(Context);

  //   console.log(store.issues);
  // const issue1 = store.issues.issue1;
  // const issue2 = store.issues.issue2;
  // const issue3 = store.issues.issue3;
  // console.log(store.issues.issue1);
  // console.log(store.issues.issue2);
  // console.log(store.issues.issue3);
  // console.log(store.data.issue);

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
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  console.log(dataArray[0][0].date);
  console.log(dataArray[0][0].issue);
  console.log(dataArray[0][0].value);

  const date = dataArray[0][0].date;
  const issue = dataArray[0][0].issue;
  console.log(issue);
  console.log(date);

  return (
    <div>
      <LineChart
        width={800}
        height={300}
        data={data}
        //   data={dataArray[0]}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        {/* <XAxis dataKey={date} /> */}
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        {/* <Line type="monotone" dataKey={issue} stroke="#8884d8" /> */}
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <Line type="monotone" dataKey="amt" stroke="#888a9d" /> */}
      </LineChart>
      <LineChart
        width={800}
        height={300}
        data={data}
        //   data={dataArray[0]}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        {/* <XAxis dataKey={date} /> */}
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" /> */}
        {/* <Line type="monotone" dataKey={issue} stroke="#8884d8" /> */}
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        {/* <Line type="monotone" dataKey="amt" stroke="#888a9d" /> */}
      </LineChart>
    </div>
  );
};
