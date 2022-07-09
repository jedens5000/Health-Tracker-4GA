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

export const Stats = () => {
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

  // /////////////////////////////////AVGS////////////////
  // var sum = 0;
  // for (const value of dataArray[0]) {
  //   sum += value;
  // }
  // console.log(sum);
  // let avg = sum / dataArray.length;
  // console.log(avg);

  // ////////////THIS SUMS ALL VALUES IN EACH ISSUE /////////////////
  const values1 = Object.values(dataArray[0]);
  const values2 = Object.values(dataArray[1]);
  const values3 = Object.values(dataArray[2]);
  console.log(values1);
  console.log(values2);
  console.log(values3);

  const sumIssue1 = values1
    .map((item) => item.value)
    .reduce((prev, curr) => prev + curr, 0);
  const sumIssue2 = values2
    .map((item) => item.value)
    .reduce((prev, curr) => prev + curr, 0);
  const sumIssue3 = values3
    .map((item) => item.value)
    .reduce((prev, curr) => prev + curr, 0);
  console.log(sumIssue1);
  console.log(sumIssue2);
  console.log(sumIssue3);
  ///////////////////////////////////////////////////////////////

  // const testArray = [...dataArray[0], ...dataArray[1], ...dataArray[2]];
  // console.log(testArray);
  const issue1 = dataArray[0][0].issue;
  const avg1 = dataArray[0][0].value;
  const issue2 = dataArray[1][0].issue;
  const issue3 = dataArray[2][0].issue;
  console.log(issue1, issue2, issue3);

  console.log(store.issues);
  console.log(store.name);
  console.log(store.data);

  return (
    <div className="chartline-bg">
      {/* <div className="chart-wrapper"> */}
      <p className="text-center">
        Your average {issue1} level is: {avg1}
      </p>
      <p className="text-center">Your average {issue2} level is:</p>
      <p className="text-center">Your average {issue3} level is:</p>
      {/* </div> */}
    </div>
  );
};
