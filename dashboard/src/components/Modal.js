import React from "react";
import Chart from "./Chart";
import "./Modal.css";

class Modal extends React.Component {
  render() {
    return (
      <div className={`modal ${this.props.isActive ? "is-active" : null}`}>
        <div className="modal-background" />
        <div className="modal-content">
          <div className="box">
            <div className="columns">
              <div className="column">
                <Chart
                  type={this.props.type}
                  socketConnection={this.props.socketConnection}
                />
              </div>
              <div className="column">
                <Chart
                  type={this.props.anomalyType}
                  socketConnection={this.props.socketConnection}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={this.props.handleModal}
        />
      </div>
    );
  }
}

export default Modal;
