import React from "react";
import Card from "./Card";
import StackTrace from "./StackTrace";
import Timer from "./Timer";
import "./Dashboard.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="section cards-container">
        <div className="columns">
          <div className="column">
            <h2>
              <i className="fas fa-microchip" /> &nbsp;CPU Usage
            </h2>
            <Card
              type={this.props.socketConnected ? "cpu" : "nothing"}
              anomalyType={
                this.props.socketConnected ? "cpuAnomaly" : "nothing"
              }
              socketConnection={this.props.socketConnection}
            />
          </div>
          <div className="column">
            <h2>
              <i className="fas fa-memory" /> &nbsp;Memory Usage
            </h2>
            <Card
              type={this.props.socketConnected ? "memory" : "nothing"}
              anomalyType={
                this.props.socketConnected ? "memoryAnomaly" : "nothing"
              }
              socketConnection={this.props.socketConnection}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h2>
              <i className="fas fa-circle-notch" /> &nbsp;Eventloop Usage
            </h2>
            <Card
              type={this.props.socketConnected ? "eventloop" : "nothing"}
              anomalyType={
                this.props.socketConnected ? "eventloopAnomaly" : "nothing"
              }
              socketConnection={this.props.socketConnection}
            />
          </div>
          <div className="column">
            <h2>
              <i className="fas fa-trash-alt" /> &nbsp;Garbage Collector Usage
            </h2>
            <Card
              type={this.props.socketConnected ? "gc" : "nothing"}
              anomalyType={this.props.socketConnected ? "gcAnomaly" : "nothing"}
              socketConnection={this.props.socketConnection}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h2>
              <i className="fas fa-layer-group" /> &nbsp;Stack Trace
            </h2>
            <StackTrace socketConnection={this.props.socketConnection} />
          </div>
          <div className="column">
            <h2>
              <i className="fas fa-stopwatch" /> &nbsp;Time Trace
            </h2>
            <Timer socketConnection={this.props.socketConnection} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
