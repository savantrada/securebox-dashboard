import React from "react";
import "./TimerModal.css";

class TimerModal extends React.Component {
  render() {
    if (!this.props.data) {
      return (
        <div
          className={`modal timer-modal ${
            this.props.isModalActive ? "is-active" : null
          }`}
        >
          <div className="modal-background" />
          <div className="modal-content">
            <div className="box">Nothing to display</div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={this.props.handleModal}
          />
        </div>
      );
    }
    const time = this.props.data.time;
    const totalTime = this.props.data.totalTime;
    const fileName = this.props.data.metadata.filename;
    const functionName = this.props.data.metadata.functionName;
    const lineNumber = this.props.data.metadata.lineNumber;
    const columnNumber = this.props.data.metadata.columnNumber;
    const trace = this.props.data.trace.map((item, index) => (
      <p key={index}>{item}</p>
    ));
    return (
      <div
        className={`modal timer-modal ${
          this.props.isModalActive ? "is-active" : null
        }`}
      >
        <div className="modal-background" />
        <div className="modal-content">
          <div className="box">
            <table className="table is-bordered is-fullwidth timer-table">
              <thead>
                <tr>
                  <th>Function Name</th>
                  <th>Total Time(ms)</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{functionName}</td>
                  <td>{totalTime}</td>
                  <td>{time}</td>
                </tr>
              </tbody>
            </table>
            <table className="table is-bordered is-fullwidth timer-table">
              <thead>
                <tr>
                  <th>File Path</th>
                  <th>Line Number</th>
                  <th>Column Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{fileName}</td>
                  <td>{lineNumber}</td>
                  <td>{columnNumber}</td>
                </tr>
              </tbody>
            </table>
            <h3>Stack Trace</h3>
            {trace}
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

export default TimerModal;
