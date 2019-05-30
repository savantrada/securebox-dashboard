import React from "react";
import { Line } from "react-chartjs-2";
import thresholds from "../../thresholds";

class ChartAnomalyGC extends React.Component {
  state = {
    lineChartData: {
      labels: [],
      datasets: [
        {
          type: "line",
          label: "duration(ms)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "hsl(348, 100%, 61%)",
          pointBackgroundColor: "hsl(0, 0%, 100%)",
          pointBorderColor: "hsl(217, 71%, 53%)",
          borderWidth: "2",
          data: []
        }
      ]
    },
    lineChartOptions: {
      title: {
        display: true,
        text: "Garbage Collector Anomalies"
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
            ticks: {}
          }
        ]
      }
    }
  };
  componentDidMount() {
    this.props.socketConnection.on("gc", data => {
      const duration = data.duration;
      if (duration > thresholds.gc.duration) {
        const oldData = this.state.lineChartData.datasets[0];
        const labels = this.state.lineChartData.labels;
        if (oldData.data.length >= 10) {
          oldData.data.shift();
          labels.shift();
        }
        const newData = { ...oldData };
        if (newData.data) {
          newData.data.push(duration);
        }
        const newChartData = {
          ...this.state.lineChartData,
          datasets: [newData],
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

export default ChartAnomalyGC;
