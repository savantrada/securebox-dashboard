import React from "react";
import TimerModal from "./TimerModal";
import axios from "axios";

class Timer extends React.Component {
  state = { timers: [], isModalActive: false, keyToModal: null };
  componentDidMount() {
    axios.get("http://localhost:9000/timer").then(result => {
      this.setState({ timers: result.data.data });
    });
    this.props.socketConnection.on("timer", data => {
      const timers = this.state.timers;
      if (timers.length > 4) {
        timers.shift();
        timers.push(data);
      }
      this.setState({ timers });
    });
  }
  handleClick = e => {
    if (this.state.isModalActive) {
      this.setState({ isModalActive: false, keyToModal: null });
    } else {
      const key = e.target.attributes.getNamedItem("data-id").value;
      this.setState({ isModalActive: true, keyToModal: key });
    }
  };
  render() {
    const list = this.state.timers.map((tr, index) => (
      <tr key={index} id={index} onClick={this.handleClick}>
        <td data-id={index}>{tr.metadata.functionName}</td>
        <td data-id={index}>{tr.metadata.filename.split("/").reverse()[0]}</td>
        <td data-id={index}>{tr.totalTime}</td>
        <td data-id={index}>{tr.time}</td>
      </tr>
    ));
    if (!this.state.timers.length) {
      return <div className="box">No timers to display</div>;
    }
    return (
      <div className="box">
        <table className="table is-hoverable is-fullwidth is-striped">
          <thead>
            <tr>
              <th>Function</th>
              <th>FileName</th>
              <th>Time Taken(ms)</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
        <TimerModal
          handleModal={this.handleClick}
          isModalActive={this.state.isModalActive}
          data={
            this.state.keyToModal
              ? this.state.timers[this.state.keyToModal]
              : null
          }
        />
      </div>
    );
  }
}
export default Timer;
