import React, { useContext, useCallback, useState, PureComponent } from "react";
import { Context } from "../store/appContext";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export const ChartPie = () => {
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
    dataArray.push(newArray);
  }

  console.log(dataArray);

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
  const issue1 = dataArray[0][0].issue;
  const issue2 = dataArray[1][0].issue;
  const issue3 = dataArray[2][0].issue;
  console.log(issue1, issue2, issue3);
  ///////////////////////////////////////////////////////////////

  const data = [
    { name: issue1, value: sumIssue1 },
    { name: issue2, value: sumIssue2 },
    { name: issue3, value: sumIssue3 },
  ];
  console.log(data);
  const COLORS = ["#8884d8", "#82ca9d", "#888a9d"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${name}` + " " + `${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={800}>
      <PieChart width={800} height={800}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={true}
          label={renderCustomizedLabel}
          outerRadius={300}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
