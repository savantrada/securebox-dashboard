import React from "react";
import { Bar } from "react-chartjs-2";

class ChartGC extends React.Component {
  state = {
    chartData: {
      labels: [],
      datasets: [
        {
          type: "line",
          label: "duration(ms)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "hsl(217, 71%, 53%)",
          pointBackgroundColor: "hsl(0, 0%, 100%)",
          pointBorderColor: "hsl(141, 71%, 48%)",
          borderWidth: "2",
          lineTension: 0.45,
          data: [],
          yAxisID: "y-axis-2"
        },
        {
          type: "bar",
          label: "heap used(%)",
          backgroundColor: "hsla(348, 100%, 61%, 0.5)",
          data: [],
          yAxisID: "y-axis-1"
        }
      ]
    },
    chartOptions: {
      title: {
        display: false,
        text: "Garbage Collector Usage"
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
            }
          }
        ],
        yAxes: [
          {
            type: "linear",
            id: "y-axis-1",
            ticks: {},
            position: "left",
            labelString: "Heap Used",
            display: true
          },
          {
            type: "linear",
            id: "y-axis-2",
            ticks: {},
            position: "right",
            labelString: "duration",
            gridLines: {
              display: false
            },
            display: true
          }
        ]
      }
    }
  };
  componentDidMount() {
    this.props.socketConnection.on("gc", data => {
      const jsHeapSize = data.size;
      const jsHeapUsedPer = Math.round((data.used / jsHeapSize) * 100);
      const duration = data.duration;
      const oldData = [
        this.state.chartData.datasets[0],
        this.state.chartData.datasets[1]
      ];
      const labels = this.state.chartData.labels;
      if (oldData[0].data.length >= 10) {
        oldData[0].data.shift();
        oldData[1].data.shift();
        labels.shift();
      }
      const newData = [{ ...oldData[0] }, { ...oldData[1] }];

      newData[0].data.push(duration);
      newData[1].data.push(jsHeapUsedPer);

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

export default ChartGC;
