import React from "react";
import { Line } from "react-chartjs-2";

class ChartCPU extends React.Component {
  state = {
    lineChartData: {
      labels: [],
      datasets: [
        {
          type: "line",
          label: "system(%)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "hsl(217, 71%, 53%)",
          pointBackgroundColor: "hsl(0, 0%, 100%)",
          pointBorderColor: "hsl(348, 100%, 61%)",
          borderWidth: "2",
          lineTension: 0.45,
          data: []
        },
        {
          type: "line",
          label: "process(%)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "hsl(141, 71%, 48%)",
          pointBackgroundColor: "hsl(0, 0%, 100%)",
          pointBorderColor: "hsl(348, 100%, 61%)",
          borderWidth: "2",
          lineTension: 0.45,
          data: []
        }
      ]
    },
    lineChartOptions: {
      title: {
        display: false,
        text: "CPU Usage"
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
    this.props.socketConnection.on("cpu", data => {
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
      newData[0].data.push(Math.round(data.system * 100));
      newData[1].data.push(Math.round(data.process * 100));
      const newChartData = {
        ...this.state.lineChartData,
        datasets: newData,
        labels: labels.concat(new Date(data.time).toLocaleTimeString())
      };
      this.setState({ lineChartData: newChartData });
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

export default ChartCPU;
