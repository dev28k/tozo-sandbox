import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  tension: 0.4,
  scale: {
    yAxes: [
      {
        display: true,
        ticks: {
          min: 0,
          max: 100,
          stepSize: 5,
        },
      },
    ],
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "01 May",
  "02 May",
  "03 May",
  "04 May",
  "05 May",
  "06 May",
  "08 May",
  "09 May",
  "10 May",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "blue",
      data: labels.map(() => faker.datatype.number({ min: 55, max: 100 })),
      borderColor: "rgba(255, 207, 109, 1)",
      backgroundColor: "rgba(255, 207, 109, 0.3)",
    },
    {
      fill: true,
      label: "orange",
      data: labels.map(() =>
        faker.datatype.number({ min: 55, max: 150, stepSize: 5 })
      ),
      borderColor: "#5578EB",
      backgroundColor: "rgba(85, 120, 235, 0.3)",
    },
  ],
};

export default function Charts() {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}
