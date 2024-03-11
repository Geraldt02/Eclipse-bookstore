import React from "react";
import ReactEChart from "echarts-for-react";

export default function LineChart({ title, data }) {
  const eChartsOption = {
    title: {
      text: title,
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      type: "value",
    },
    legend: {
      bottom: "0%",
      data: ["Items Sold This Year", "Items Sold Last Year"],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    series: [
      {
        name: "Items Sold This Year",
        data: data.thisYear,
        type: "line",
      },
      {
        name: "Items Sold Last Year",
        data: data.lastYear,
        type: "line",
      },
    ],
  };

  return (
    <div>
      <ReactEChart option={eChartsOption} />
    </div>
  );
}
