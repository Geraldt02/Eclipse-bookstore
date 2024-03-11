import React from "react";
import ReactEChart from "echarts-for-react";

export default function BarChart() {
  const categories = ["Other", "Comics", "Journals", "Magazines", "Books"];
  const seriesData = [1893, 3058, 2182, 2689, 2745];
  const colors = ["#528EF5", "#6DE19A", "#0000ff", "#EEB23C", "#775ECB"];

  const series = categories.map((category, index) => ({
    name: category,
    type: "bar",
    data: [
      index === 0 ? seriesData[index] : 0,
      index === 1 ? seriesData[index] : 0,
      index === 2 ? seriesData[index] : 0,
      index === 3 ? seriesData[index] : 0,
      index === 4 ? seriesData[index] : 0,
    ],
    stack: "total",
    itemStyle: {
      color: colors[index],
    },
  }));

  const eChartsOption = {
    title: {
      text: "title",
    },
    yAxis: {
      type: "category",
      data: categories,
      axisLabel: { 
        fontSize: 12, 
      },
      axisLine: {
        lineStyle: {
          color: "black",
        },
      },
    },
    xAxis: {
      type: "value",
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      textStyle: {
        color: "white",
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    legend: {
      show: true,
      bottom: "0%",
    },
    series: series,
  };

  return (
    <div>
      <ReactEChart option={eChartsOption} />
    </div>
  );
}
