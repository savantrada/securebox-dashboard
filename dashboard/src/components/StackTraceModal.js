import React from "react";
import "./StackTraceModal.css";

class StackTraceModal extends React.Component {
  render() {
    if (!this.props.data) {
      return (
        <div
          className={`modal stackTrace-modal ${
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
    const items = this.props.data.trace.map((item, index) => (
      <p key={index}>{item}</p>
    ));
    return (
      <div
        className={`modal stackTrace-modal ${
          this.props.isModalActive ? "is-active" : null
        }`}
      >
        <div className="modal-background" />
        <div className="modal-content">
          <div className="box">
            <h3>Time</h3>
            <p>{time}</p>
            <h3>Stack Trace</h3>
            {items}
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

export default StackTraceModal;
