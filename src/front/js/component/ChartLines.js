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
  console.log(store.data[0]);

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
  const issue1 = dataArray[0][0].issue;
  const issue2 = dataArray[1][0].issue;
  const issue3 = dataArray[2][0].issue;

  let data = [
    {
      date: dataArray[0][0].date.slice(0, 11),
      issue1: dataArray[0][0].value,
      issue2: dataArray[1][0].value,
      issue3: dataArray[2][0].value,
    },
    {
      date: dataArray[0][1].date.slice(0, 11),
      issue1: dataArray[0][1].value,
      issue2: dataArray[1][1].value,
      issue3: dataArray[2][1].value,
    },
    {
      date: dataArray[0][2].date.slice(0, 11),
      issue1: dataArray[0][2].value,
      issue2: dataArray[1][2].value,
      issue3: dataArray[2][2].value,
    },
    {
      date: dataArray[0][3].date.slice(0, 11),
      issue1: dataArray[0][3].value,
      issue2: dataArray[1][3].value,
      issue3: dataArray[2][3].value,
    },
    {
      date: dataArray[0][4].date.slice(0, 11),
      issue1: dataArray[0][4].value,
      issue2: dataArray[1][4].value,
      issue3: dataArray[2][4].value,
    },
    {
      date: dataArray[0][5].date.slice(0, 11),
      issue1: dataArray[0][5].value,
      issue2: dataArray[1][5].value,
      issue3: dataArray[2][5].value,
    },
    {
      date: dataArray[0][6].date.slice(0, 11),
      issue1: dataArray[0][6].value,
      issue2: dataArray[1][6].value,
      issue3: dataArray[2][6].value,
    },
  ];

  console.log(dataArray[0][0].date);
  console.log(dataArray[0][0].issue);
  console.log(dataArray[0][0].value);

  const date = dataArray[0][0].date.slice(0, 11);
  console.log(date); // This is good but EU format
  // console.log(date.toLocaleDateString("en-us"));

  console.log(issue1);
  console.log(issue2);
  console.log(issue3);
  console.log(dataArray[0][0]);
  console.log(dataArray[0]);
  console.log(dataArray[1]);
  console.log(dataArray[2]);

  return (
    <LineChart
      width={800}
      height={300}
      data={data}
      // data={dataArray[0]}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      {/* <XAxis dataKey={date} /> */}
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Line type="monotone" dataKey={issue} stroke="#8884d8" /> */}
      <Line type="monotone" dataKey={issue1} stroke="#82ca9d" />
      <Line type="monotone" dataKey="issue2" stroke="#8884d8" />
      <Line type="monotone" dataKey="issue3" stroke="#888a9d" />
    </LineChart>
  );
};
