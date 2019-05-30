import React from "react";
import ChartCPU from "./charts/ChartCPU";
import ChartAnomalyCPU from "./charts/ChartAnomalyCPU";
import ChartMemory from "./charts/ChartMemory";
import ChartAnomalyMemory from "./charts/ChartAnomalyMemory";
import ChartEL from "./charts/ChartEL";
import ChartAnomalyEL from "./charts/ChartAnomalyEL";
import ChartGC from "./charts/ChartGC";
import ChartAnomalyGC from "./charts/ChartAnomalyGC";

const Chart = props => {
  switch (props.type) {
    case "cpu":
      return <ChartCPU socketConnection={props.socketConnection} />;
    case "cpuAnomaly":
      return <ChartAnomalyCPU socketConnection={props.socketConnection} />;
    case "memory":
      return <ChartMemory socketConnection={props.socketConnection} />;
    case "memoryAnomaly":
      return <ChartAnomalyMemory socketConnection={props.socketConnection} />;
    case "eventloop":
      return <ChartEL socketConnection={props.socketConnection} />;
    case "eventloopAnomaly":
      return <ChartAnomalyEL socketConnection={props.socketConnection} />;
    case "gc":
      return <ChartGC socketConnection={props.socketConnection} />;
    case "gcAnomaly":
      return <ChartAnomalyGC socketConnection={props.socketConnection} />;
    default:
      return <h1>Nothing to Display</h1>;
  }
};

export default Chart;
