import React from "react";
import { Bar } from "react-chartjs-2";

class ChartMemory extends React.Component {
  state = {
    chartData: {
      labels: [],
      datasets: [
        {
          type: "line",
          label: "node private(%)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "hsl(141, 71%, 48%)",
          pointBackgroundColor: "hsl(0, 0%, 100%)",
          pointBorderColor: "hsl(217, 71%, 53%)",
          borderWidth: "2",
          lineTension: 0.45,
          data: []
        },
        {
          type: "line",
          label: "node physical(%)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "hsl(348, 100%, 61%)",
          pointBackgroundColor: "hsl(0, 0%, 100%)",
          pointBorderColor: "hsl(217, 71%, 53%)",
          borderWidth: "2",
          lineTension: 0.45
        },
        {
          type: "bar",
          label: "total used(%)",
          backgroundColor: "hsla(348, 100%, 61%, 0.5)",
          stack: "Stack 0",
          data: []
        },
        {
          type: "bar",
          label: "total free(%)",
          backgroundColor: "hsla(141, 71%, 48%, 0.5)",
          stack: "Stack 0",
          data: []
        }
      ]
    },
    chartOptions: {
      title: {
        display: false,
        text: "Memory Usage"
      },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
        intersect: false
      },
      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10
            },
            stacked: true
          }
        ],
        yAxes: [
          {
            ticks: {
              max: 100,
              min: 0,
              stepSize: 15
            },
            stacked: true
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
      const systemFreePer = 100 - systemUsedPer;
      const nodePrivatePer = Math.round((data.private / systemTotal) * 100);
      const nodePhysicalPer = Math.round((data.physical / systemTotal) * 100);
      const oldData = [
        this.state.chartData.datasets[0],
        this.state.chartData.datasets[1],
        this.state.chartData.datasets[2],
        this.state.chartData.datasets[3]
      ];
      const labels = this.state.chartData.labels;
      if (oldData[0].data.length >= 10) {
        oldData[0].data.shift();
        oldData[1].data.shift();
        oldData[2].data.shift();
        oldData[3].data.shift();
        labels.shift();
      }
      const newData = [
        { ...oldData[0] },
        { ...oldData[1] },
        { ...oldData[2] },
        { ...oldData[3] }
      ];
      newData[2].data.push(systemUsedPer);
      newData[3].data.push(systemFreePer);
      newData[0].data.push(nodePrivatePer);
      newData[1].data.push(nodePhysicalPer);

      const newChartData = {
        ...this.state.chartData,
        datasets: newData,
        labels: labels.concat(new Date(data.time).toLocaleTimeString())
      };
      this.setState({ chartData: newChartData });
    });
  }
  render() {
    return (
      <Bar data={this.state.chartData} options={this.state.chartOptions} />
    );
  }
}

export default ChartMemory;
