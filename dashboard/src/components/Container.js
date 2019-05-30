import React from "react";
import Dashboard from "./Dashboard";
import "./Wrapper.css";
import io from "socket.io-client";
import AuditModal from "./AuditModal";
import axios from "axios";

const socket = io.connect("http://localhost:9000");

class Container extends React.Component {
  state = {
    isMobile: false,
    socketConnected: false,
    auditData: null,
    isModalActive: false
  };
  componentDidMount() {
    socket.on("connect", () => {
      this.setState({ socketConnected: true });
    });
    socket.on("disconnect", () => {
      this.setState({ socketConnected: false });
    });
    axios
      .get("http://localhost:9000/audit", {})
      .then(result => {
        this.setState({ auditData: result.data.data[0] });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleAuditClick = () => {
    if (this.state.isModalActive) {
      this.setState({ isModalActive: false });
    } else {
      this.setState({ isModalActive: true });
    }
  };
  render() {
    return (
      <main className="wrapper">
        <header className="navbar is-fixed-top">
          <div className="container">
            <div
              className={`navbar-brand ${
                this.state.isMobile ? "is-acive" : null
              }`}
            >
              <a href="/" className="navbar-item">
                <i className="fas fa-shield-alt" />
                Securebox
              </a>
              <span className="navbar-burger burger">
                <span />
                <span />
                <span />
              </span>
            </div>
          </div>
          <div
            className={`navbar-menu ${this.state.isMobile ? null : "is-acive"}`}
          >
            <div className="navbar-end">
              <a
                href="#/"
                className="navbar-item button is-rounded"
                onClick={this.handleAuditClick}
              >
                View Audit
              </a>
              <a href="/" className="navbar-item">
                Dashboard
              </a>
              <a href="/settings" className="navbar-item">
                Settings
              </a>
              <a href="/about" className="navbar-item">
                About
              </a>
            </div>
          </div>
        </header>
        <section className="section dashboard">
          <Dashboard
            socketConnection={socket}
            socketConnected={this.state.socketConnected}
          />
          <AuditModal
            handleModal={this.handleAuditClick}
            isModalActive={this.state.isModalActive}
            data={this.state.auditData}
          />
        </section>
      </main>
    );
  }
}

export default Container;
