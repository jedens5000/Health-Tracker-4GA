import React, { useContext, useEffect, PureComponent } from "react";
import Table from "react-bootstrap/Table";
import { Context } from "../store/appContext";

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
  ///////////////////////////AVG CONVERSTION////////////////////////////
  const trackedDays1 = values1.length;
  const trackedDays2 = values2.length;
  const trackedDays3 = values3.length;
  const avg1 = Math.round((sumIssue1 / trackedDays1) * 100) / 100;
  const avg2 = Math.round((sumIssue2 / trackedDays2) * 100) / 100;
  const avg3 = Math.round((sumIssue3 / trackedDays3) * 100) / 100;

  console.log(avg1);
  console.log(avg2);
  console.log(avg3);
  console.log(values1.length);
  ///////////////////////////////////////////////////////////////

  // const testArray = [...dataArray[0], ...dataArray[1], ...dataArray[2]];
  // console.log(testArray);
  const issue1 = dataArray[0][0].issue;
  const issue2 = dataArray[1][0].issue;
  const issue3 = dataArray[2][0].issue;
  console.log(issue1, issue2, issue3);

  console.log(store.issues);
  console.log(store.name);
  console.log(store.data);

  return (
    <div className="chartline-bg text-center">
      <div className="chart-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Issue</th>
              <th>Average Level</th>
              <th>Days tracked</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{issue1}</td>
              <td>{avg1}</td>
              <td>{trackedDays1}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{issue2}</td>
              <td>{avg2}</td>
              <td>{trackedDays2}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{issue3}</td>
              <td>{avg3}</td>
              <td>{trackedDays3}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
