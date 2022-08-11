import React from "react";
import Chart from "react-google-charts";

const data = [
  ["Post", "Percentage"],
  ["Photo", 11],
  ["Link", 2],
  ["Video", 2],
  ["Text", 2],
];
const options = {
  //   title: "My Daily Activities",
  chartArea: {
    // leave room for y-axis labels
    width: '100%',
    height: '70%',
  },
  legend: {
    position: 'bottom'
  },
  pieHole: 0.4,
  is3D: false,
  colors: ["#3BB77E", "#00BAF2", "#906ED1", "#FFE144"],
  allowHtml: true,
};
export default class DoughnutChart extends React.Component {
  render() {
    return (
        <Chart
          chartType="PieChart"
          height={'90%'}
          data={data}
          options={options}
        />
    );
  }
}
