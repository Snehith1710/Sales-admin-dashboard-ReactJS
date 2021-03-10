import React from "react";
import { Bar } from "react-chartjs-2";

const state = {
  labels: [
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
  ],
  datasets: [
    {
      label: "Income",
      backgroundColor: "rgba(5,11,66,1)",
      data: [
        5000,
        8000,
        12000,
        3000,
        5500,
        6000,
        12000,
        11000,
        9000,
        13000,
        8500,
        1000,
      ],
      type: "bar",
    },

    {
      label: "Expenses",
      backgroundColor: "rgb(93,94,187,1)",
      data: [
        5500,
        2000,
        5500,
        1000,
        5500,
        5000,
        1500,
        4000,
        2000,
        2500,
        6000,
        1000,
      ],
      type: "bar",
    },
    {
      label: "Profit",
      borderColor: "rgb(255,0,0,1)",
      data: [
        0,
        5000,
        3000,
        1000,
        5500,
        5000,
        1500,
        4000,
        2000,
        2500,
        6000,
        1000,
      ],
      type: "line",
      fill: false,
    },
  ],
};

export default class QuickBooks extends React.Component {
  render() {
    return (
      <>
        <div>
          <h5>QuickBooks Income and Expenses (12 Months)</h5>
        </div>
        <br />
        <div style={{ height: "500px", width: "1000px" }}>
          <Bar
            data={state}
            options={{
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </>
    );
  }
}
