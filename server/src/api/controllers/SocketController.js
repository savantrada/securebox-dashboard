import _ from "underscore";
import { RSA_NO_PADDING } from "constants";
import Trace from "../models/trace";
import Timer from "../models/timer";
import Audit from "../models/audit";

export default io => ({
  stackTrace(req, res) {
    const stackTrace = req.body.trace;
    const time = req.body.time;
    if (stackTrace) {
      const trace = new Trace();
      trace.trace = stackTrace;
      trace.time = time;
      trace.save((err) => {
        if (err) {
          console.log("Trace not saved");
        }
      });
      io.emit("stacktrace", { trace: stackTrace, time });
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  },
  timer(req, res) {
    const totalTime = req.body.total_time;
    const metadata = req.body.metadata;
    const time = req.body.time;
    const trace = req.body.trace;
    if (totalTime) {
      const timer = new Timer();
      timer.totalTime = totalTime;
      timer.metadata = metadata;
      timer.time = time;
      timer.trace = trace;
      timer.save((err) => {
        if (err) {
          console.log("Timer data not saved");
        }
      });
      io.emit("timer", {
        totalTime,
        metadata,
        time,
        trace,
      });
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  },
  audit(req, res) {
    if (req.body.audit) {
      const advisories = req.body.audit.advisories;
      const filteredAudit = _.groupBy(_.toArray(advisories), item => item.severity);
      const audit = new Audit();
      audit.metadata = req.body.audit.metadata;
      audit.audit = filteredAudit;
      Audit.count({}, (err, count) => {
        if (err) {
          console.log("Cannot count audits");
        } else if (!count) {
          audit.save((error) => {
            if (error) {
              console.log("Audit cannot be saved");
            }
          });
        }
      });

      io.emit("audit", { audit: filteredAudit, metadata: req.body.audit.metadata });
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  },
  getTimer(req, res) {
    Timer.find({})
      .sort({ created_at: -1 })
      .limit(5)
      .exec((err, data) => {
        if (err) {
          res.send({ success: false, data: {} });
        } else {
          res.send({
            success: true,
            data,
          });
        }
      });
  },
  getTrace(req, res) {
    Trace.find({})
      .sort({ created_at: -1 })
      .limit(5)
      .exec((err, data) => {
        if (err) {
          res.send({ success: false, data: {} });
        } else {
          res.send({ success: true, data });
        }
      });
  },
  getAudit(req, res) {
    Audit.find({}).exec((err, data) => {
      if (err) {
        res.send({ success: false, data: {} });
      } else {
        res.send({ success: true, data });
      }
    });
  },
});
