import React from "react";
import StackTraceModal from "./StackTraceModal";
import axios from "axios";

class StackTrace extends React.Component {
  state = { traces: [], isModalActive: false, keyToModal: null };
  componentDidMount() {
    axios.get("http://localhost:9000/stacktrace").then(result => {
      this.setState({ traces: result.data.data });
    });
    this.props.socketConnection.on("stacktrace", data => {
      const traces = this.state.traces;
      if (traces.length > 4) {
        traces.shift();
        traces.push(data);
      }
      this.setState({ traces });
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
    const list = this.state.traces.map((tr, index) => (
      <tr key={index} id={index} onClick={this.handleClick}>
        <td data-id={index}>{tr.trace[0]}</td>
        <td data-id={index}>{tr.time}</td>
      </tr>
    ));
    if (!this.state.traces.length) {
      return <div className="box">No trace to display</div>;
    }
    return (
      <div className="box">
        <table className="table is-hoverable is-fullwidth is-striped">
          <thead>
            <tr>
              <th>Trace</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
        <StackTraceModal
          handleModal={this.handleClick}
          isModalActive={this.state.isModalActive}
          data={
            this.state.keyToModal
              ? this.state.traces[this.state.keyToModal]
              : null
          }
        />
      </div>
    );
  }
}
export default StackTrace;
