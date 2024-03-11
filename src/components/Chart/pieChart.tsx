import React from "react";
import ReactEChart from "echarts-for-react";

export default function PieChart({title, data}) {
  const eChartsOption = {
    title: {
        text: title,
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0%",
      left: "center",
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    series: [
      {
        name: "Most sales",
        type: "pie",
        bottom: "8%",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
            show: true,
            position: 'inside', 
            formatter: '{c}',
            fontSize: 14,
            // color: '#333'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 15,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: data
      },
    ],
  };

  return (
    <div
    // style={{ width: "100%", height: "100%" }}
    >
      <ReactEChart
        option={eChartsOption}
        style={{ width: "100%"}}
      />
    </div>
  );
}
