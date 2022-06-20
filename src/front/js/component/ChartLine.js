import React, { useContext, useEffect, PureComponent } from "react";

import { Context } from "../store/appContext";
import {
  LineChart,
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
  // useEffect(() => {
  //   actions.getIssues();
  // }, []);
  // console.log(store.issues);
  // const issue1 = store.issues.issue1;
  // console.log(store.issues.issue1);
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

  const issue1 = dataArray[0][0].issue;
  // const issue2 = dataArray[1][0].issue;
  // const issue3 = dataArray[2][0].issue;
  // console.log(issue1, issue2, issue3, date);

  return (
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
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Line type="monotone" dataKey={issue1} stroke="#8884d8" /> */}
      <Line type="monotone" dataKey="issue" stroke="#8884d8" />
      {/* <Line type="monotone" dataKey="Depression" stroke="#82ca9d" /> */}
    </LineChart>
  );
};
