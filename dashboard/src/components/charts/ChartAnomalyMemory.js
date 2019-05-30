import React from "react";
import { Line } from "react-chartjs-2";
import thresholds from "../../thresholds";

class ChartAnomalyMemory extends React.Component {
  state = {
    lineChartData: {
      labels: [],
      datasets: [
        {
          type: "line",
          label: "system(%)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "hsl(348, 100%, 61%)",
          pointBackgroundColor: "hsl(0, 0%, 100%)",
          pointBorderColor: "hsl(217, 71%, 53%)",
          borderWidth: "2",
          data: []
        },
        {
          type: "line",
          label: "process(%)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "hsl(48, 100%, 67%)",
          pointBackgroundColor: "hsl(0, 0%, 100%)",
          pointBorderColor: "hsl(348, 100%, 61%)",
          borderWidth: "2",
          data: []
        }
      ]
    },
    lineChartOptions: {
      title: {
        display: true,
        text: "Memory Usage Anomalies"
      },
      elements: {
        line: {
          tension: 0 // disables bezier curves
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: true
      },
      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              max: 100,
              min: 0,
              stepSize: 20
            }
          }
        ]
      }
    }
  };
  componentDidMount() {
    this.props.socketConnection.on("memory", data => {
      const systemTotal = data.physical_total;
      const systemUsedPer = Math.round(
        (data.physical_used / systemTotal) * 100
      );
      const nodePhysicalPer = Math.round((data.physical / systemTotal) * 100);
      if (
        Math.round(systemUsedPer * 100) > thresholds.memory.system ||
        Math.round(nodePhysicalPer * 100) > thresholds.memory.node
      ) {
        const oldData = [
          this.state.lineChartData.datasets[0],
          this.state.lineChartData.datasets[1]
        ];
        const labels = this.state.lineChartData.labels;
        if (oldData[0].data.length >= 10) {
          oldData[0].data.shift();
          oldData[1].data.shift();
          labels.shift();
        }
        const newData = [{ ...oldData[0] }, { ...oldData[1] }];
        newData[0].data.push(systemUsedPer);
        newData[1].data.push(nodePhysicalPer);
        const newChartData = {
          ...this.state.lineChartData,
          datasets: newData,
          labels: labels.concat(new Date(data.time).toLocaleTimeString())
        };
        this.setState({ lineChartData: newChartData });
      }
    });
  }
  render() {
    return (
      <Line
        data={this.state.lineChartData}
        options={this.state.lineChartOptions}
      />
    );
  }
}

export default ChartAnomalyMemory;
