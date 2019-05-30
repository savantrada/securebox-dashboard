import React from "react";
import { Line } from "react-chartjs-2";

class ChartEL extends React.Component {
  state = {
    lineChartData: {
      labels: [],
      datasets: [
        {
          type: "line",
          label: "max latency(ms)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "hsl(348, 100%, 61%)",
          pointBackgroundColor: "hsl(0, 0%, 100%)",
          pointBorderColor: "hsl(217, 71%, 53%)",
          borderWidth: "2",
          lineTension: 0.45,
          data: []
        },
        {
          type: "line",
          label: "avg latency(ms)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "hsl(48, 100%, 67%)",
          pointBackgroundColor: "hsl(0, 0%, 100%)",
          pointBorderColor: "hsl(217, 71%, 53%)",
          borderWidth: "2",
          lineTension: 0.45,
          data: []
        },
        {
          type: "line",
          label: "min latency(ms)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "hsl(141, 71%, 48%)",
          pointBackgroundColor: "hsl(0, 0%, 100%)",
          pointBorderColor: "hsl(217, 71%, 53%)",
          borderWidth: "2",
          lineTension: 0.45,
          data: []
        }
      ]
    },
    lineChartOptions: {
      title: {
        display: false,
        text: "EventLoop Usage"
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
              max: 1,
              min: 0,
              stepSize: 0
            }
          }
        ]
      }
    }
  };
  componentDidMount() {
    this.props.socketConnection.on("eventloop", data => {
      const oldData = [
        this.state.lineChartData.datasets[0],
        this.state.lineChartData.datasets[1],
        this.state.lineChartData.datasets[2]
      ];
      const labels = this.state.lineChartData.labels;
      if (oldData[0].data.length >= 10) {
        oldData[0].data.shift();
        oldData[1].data.shift();
        oldData[2].data.shift();
        labels.shift();
      }
      const newData = [{ ...oldData[0] }, { ...oldData[1] }, { ...oldData[2] }];
      newData[0].data.push(data.latency.max);
      newData[1].data.push(data.latency.avg);
      newData[2].data.push(data.latency.min);
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

export default ChartEL;
