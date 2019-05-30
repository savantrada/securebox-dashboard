import React from "react";
import "./AuditModal.css";

class AuditModal extends React.Component {
  render() {
    if (!this.props.data) {
      return (
        <div
          className={`modal ${this.props.isModalActive ? "is-active" : null}`}
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
    } else {
      const advisories = this.props.data.audit;
      const metadata = this.props.data.metadata;
      const itemsHigh = advisories.high.map((item, index) => {
        return (
          <div className="notification is-danger" key={index}>
            <h2>{item.title}</h2>
            <h3>Description</h3>
            <p>{item.overview ? item.overview : "NA"}</p>
            <h3>Recommendation</h3>
            <p>{item.recommendation ? item.recommendation : "NA"}</p>
            <h3>Advisory URL</h3>
            <p>
              <a href={item.url ? item.url : "#"}>
                {item.url ? item.url : "NA"}
              </a>
            </p>
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <td className="item-head">Module Name</td>
                  <td className="item-head">Created At</td>
                  <td className="item-head">Updated At</td>
                </tr>
                <tr>
                  <td>{item.module_name ? item.module_name : "NA"}</td>
                  <td>{item.created ? item.created : "NA"}</td>
                  <td>{item.updated ? item.updated : "NA"}</td>
                </tr>
                <tr>
                  <td className="item-head">Finding Count</td>
                  <td className="item-head">Vulnerable Versions</td>
                  <td className="item-head">Patched Version</td>
                </tr>
                <tr>
                  <td>{item.findings ? item.findings.length : "NA"}</td>
                  <td>
                    {item.vulnerable_versions ? item.vulnerable_versions : "NA"}
                  </td>
                  <td>
                    {item.patched_versions ? item.vulnerable_versions : "NA"}
                  </td>
                </tr>
                <tr>
                  <td className="item-head">Access Type</td>
                  <td className="item-head">CWE</td>
                  <td className="item-head">Severity</td>
                </tr>
                <tr>
                  <td>{item.access ? item.access : "NA"}</td>
                  <td>{item.cwe ? item.cwe : "NA"}</td>
                  <td>{item.severity ? item.severity : "NA"}</td>
                </tr>
                <tr>
                  <td className="item-head">Exploitability</td>
                  <td className="item-head">Module Type</td>
                  <td className="item-head">CVE</td>
                </tr>
                <tr>
                  <td>
                    {item.metadata.exploitability
                      ? item.metadata.exploitability
                      : "NA"}
                  </td>
                  <td>
                    {item.metadata.module_type
                      ? item.metadata.module_type
                      : "NA"}
                  </td>
                  <td>{item.cves.length ? item.cves[0] : "NA"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      });
      const itemsMedium = advisories.moderate.map((item, index) => {
        return (
          <div className="notification is-warning" key={index}>
            <h2>{item.title}</h2>
            <h3>Description</h3>
            <p>{item.overview ? item.overview : "NA"}</p>
            <h3>Recommendation</h3>
            <p>{item.recommendation ? item.recommendation : "NA"}</p>
            <h3>Advisory URL</h3>
            <p>
              <a href={item.url ? item.url : "#"}>
                {item.url ? item.url : "NA"}
              </a>
            </p>
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <td className="item-head">Module Name</td>
                  <td className="item-head">Created At</td>
                  <td className="item-head">Updated At</td>
                </tr>
                <tr>
                  <td>{item.module_name ? item.module_name : "NA"}</td>
                  <td>{item.created ? item.created : "NA"}</td>
                  <td>{item.updated ? item.updated : "NA"}</td>
                </tr>
                <tr>
                  <td className="item-head">Finding Count</td>
                  <td className="item-head">Vulnerable Versions</td>
                  <td className="item-head">Patched Version</td>
                </tr>
                <tr>
                  <td>{item.findings ? item.findings.length : "NA"}</td>
                  <td>
                    {item.vulnerable_versions ? item.vulnerable_versions : "NA"}
                  </td>
                  <td>
                    {item.patched_versions ? item.vulnerable_versions : "NA"}
                  </td>
                </tr>
                <tr>
                  <td className="item-head">Access Type</td>
                  <td className="item-head">CWE</td>
                  <td className="item-head">Severity</td>
                </tr>
                <tr>
                  <td>{item.access ? item.access : "NA"}</td>
                  <td>{item.cwe ? item.cwe : "NA"}</td>
                  <td>{item.severity ? item.severity : "NA"}</td>
                </tr>
                <tr>
                  <td className="item-head">Exploitability</td>
                  <td className="item-head">Module Type</td>
                  <td className="item-head">CVE</td>
                </tr>
                <tr>
                  <td>
                    {item.metadata.exploitability
                      ? item.metadata.exploitability
                      : "NA"}
                  </td>
                  <td>
                    {item.metadata.module_type
                      ? item.metadata.module_type
                      : "NA"}
                  </td>
                  <td>{item.cves.length ? item.cves[0] : "NA"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      });
      const itemsLow = advisories.low.map((item, index) => {
        return (
          <div className="notification is-info" key={index}>
            <h2>{item.title}</h2>
            <h3>Description</h3>
            <p>{item.overview ? item.overview : "NA"}</p>
            <h3>Recommendation</h3>
            <p>{item.recommendation ? item.recommendation : "NA"}</p>
            <h3>Advisory URL</h3>
            <p>
              <a href={item.url ? item.url : "#"}>
                {item.url ? item.url : "NA"}
              </a>
            </p>
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <td className="item-head">Module Name</td>
                  <td className="item-head">Created At</td>
                  <td className="item-head">Updated At</td>
                </tr>
                <tr>
                  <td>{item.module_name ? item.module_name : "NA"}</td>
                  <td>{item.created ? item.created : "NA"}</td>
                  <td>{item.updated ? item.updated : "NA"}</td>
                </tr>
                <tr>
                  <td className="item-head">Finding Count</td>
                  <td className="item-head">Vulnerable Versions</td>
                  <td className="item-head">Patched Version</td>
                </tr>
                <tr>
                  <td>{item.findings ? item.findings.length : "NA"}</td>
                  <td>
                    {item.vulnerable_versions ? item.vulnerable_versions : "NA"}
                  </td>
                  <td>
                    {item.patched_versions ? item.vulnerable_versions : "NA"}
                  </td>
                </tr>
                <tr>
                  <td className="item-head">Access Type</td>
                  <td className="item-head">CWE</td>
                  <td className="item-head">Severity</td>
                </tr>
                <tr>
                  <td>{item.access ? item.access : "NA"}</td>
                  <td>{item.cwe ? item.cwe : "NA"}</td>
                  <td>{item.severity ? item.severity : "NA"}</td>
                </tr>
                <tr>
                  <td className="item-head">Exploitability</td>
                  <td className="item-head">Module Type</td>
                  <td className="item-head">CVE</td>
                </tr>
                <tr>
                  <td>
                    {item.metadata.exploitability
                      ? item.metadata.exploitability
                      : "NA"}
                  </td>
                  <td>
                    {item.metadata.module_type
                      ? item.metadata.module_type
                      : "NA"}
                  </td>
                  <td>{item.cves.length ? item.cves[0] : "NA"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      });
      return (
        <div
          className={`modal audit-modal ${
            this.props.isModalActive ? "is-active" : null
          }`}
        >
          <div className="modal-background" />
          <div className="modal-content">
            <div className="box">
              <h2 className="audit-heading">Audit Scan Result</h2>
              <table className="table metadata is-fullwidth">
                <tbody>
                  <tr>
                    <td colSpan="3" className="dep-head">
                      Vulnerabilities
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="tags has-addons">
                        <span className="tag is-danger">High</span>
                        <span className="tag">
                          {metadata.vulnerabilities.high}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="tags has-addons">
                        <span className="tag is-warning">Moderate</span>
                        <span className="tag">
                          {metadata.vulnerabilities.moderate}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="tags has-addons">
                        <span className="tag is-info">Low</span>
                        <span className="tag">
                          {metadata.vulnerabilities.low}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="dep-head">Dependencies</td>
                    <td className="dep-head">Dev Dependencies</td>
                    <td className="dep-head">Optional Dependencies</td>
                  </tr>
                  <tr>
                    <td>{metadata.dependencies}</td>
                    <td>{metadata.devDependencies}</td>
                    <td>{metadata.optionalDependencies}</td>
                  </tr>
                </tbody>
              </table>
              {itemsHigh}
              {itemsMedium}
              {itemsLow}
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
}

export default AuditModal;
