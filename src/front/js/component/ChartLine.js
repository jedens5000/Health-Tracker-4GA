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
  console.log(store.issues);
  // const issue1 = store.issues.issue1;
  // const issue2 = store.issues.issue2;
  // const issue3 = store.issues.issue3;
  // console.log(store.issues.issue1);
  // console.log(store.issues.issue2);
  // console.log(store.issues.issue3);
  // console.log(store.data.issue);

  // DATE METHOD 1 ///////////////////////////////////////////////////////////////
  // const today = new Date();
  // console.log(today);
  // const previousDate = new Date(today);
  // previousDate.setDate(previousDate.getDate() - 1);
  // console.log(previousDate); // GMT date & time
  // console.log(today.toDateString()); // day of week + Mmm/dd/yyyy
  // console.log(previousDate.toDateString().slice(4, 10)); // Mmm/dd
  // console.log(previousDate.toDateString().slice(0, 10)); // day of week + Mmm/dd

  // let month = today.getMonth() + 1; //Numerical month
  // let day = today.getDate(); // numerical day
  // let yesterday = day - 1;
  // console.log(month + "/" + day); //  MM/DD
  // console.log(month + "/" + yesterday); // MM/DD

  // DATE METHOD 2 ///////////////////////////////////////////////////////////////
  // const current = new Date();
  // const date = `${current.getMonth() + 1}/${current.getDate()}`;
  // // ${current.getFullYear()}`
  // console.log(current);
  // console.log(current.getDate() - 1);
  // END DATE METHODS ////////////////////////////////////////////////////////////

  // const issues = new Set();
  // store.data.forEach((element) => {
  //   issues.add(element.issue);
  // });
  // const setArray = [...issues];
  // console.log(issues);
  // const dataArray = [];
  // for (let i = 0; i < setArray.length; i++) {
  //   const newArray = store.data.filter((element) => {
  //     if (element.issue === setArray[i]) {
  //       return true;
  //     }
  //   });
  //   dataArray.push(newArray);
  // }

  // console.log(dataArray);
  // const datax = [
  //   {
  //     name: "6/09",
  //     issue1: 4000,
  //     issue2: 2400,
  //     issue3: 2400,
  //   },
  //   {
  //     name: "6/10",
  //     issue1: 3000,
  //     issue2: 1398,
  //     issue3: 2210,
  //   },
  //   {
  //     name: "6/11",
  //     issue1: 2000,
  //     issue2: 9800,
  //     issue3: 2290,
  //   },
  //   {
  //     name: "6/12",
  //     issue1: 2780,
  //     issue2: 3908,
  //     issue3: 2000,
  //   },
  //   {
  //     name: "6/13",
  //     issue1: 1890,
  //     issue2: 4800,
  //     issue3: 2181,
  //   },
  //   {
  //     name: "6/14",
  //     issue1: 2390,
  //     issue2: 3800,
  //     issue3: 2500,
  //   },
  //   {
  //     name: date,
  //     issue1: 3490,
  //     issue2: 4300,
  //     issue3: 2100,
  //   },
  // ];

  // export default class Example extends PureComponent {
  //   static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  // const issue1 = dataArray[0][0].issue;
  // const issue2 = dataArray[1][0].issue;
  // const issue3 = dataArray[2][0].issue;
  // console.log(issue1, issue2, issue3, date);
  // console.log(datax);
  return (
    <>
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      {/* ///////////////////////////////////////////////////////// */}
      {/* <LineChart
        width={500}
        height={300}
        data={datax}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="amt" stroke="#888a9d" />
      </LineChart> */}
    </>
  );
};
