import React from "react";
import Chart from "./Chart";
import Modal from "./Modal";
import "./Card.css";

class Card extends React.Component {
  state = { isModalActive: false };
  handleModalClick = () => {
    if (this.state.isModalActive) {
      this.setState({ isModalActive: false });
    } else {
      this.setState({ isModalActive: true });
    }
  };
  render() {
    return (
      <div className="box">
        <Chart
          type={this.props.type}
          socketConnection={this.props.socketConnection}
        />
        <Modal
          isActive={this.state.isModalActive}
          handleModal={this.handleModalClick}
          type={this.props.type}
          anomalyType={this.props.anomalyType}
          socketConnection={this.props.socketConnection}
        />
        <button
          className="button is-link is-outlined"
          onClick={this.handleModalClick}
        >
          See Details
        </button>
      </div>
    );
  }
}

export default Card;
