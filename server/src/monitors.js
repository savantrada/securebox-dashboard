import _ from "underscore";

const monitors = {
  main: {
    cpu: true,
    eventloop: true,
    gc: true,
    environment: true,
    loop: false,
    memory: true,
    profiling: false,
  },
  probe: {
    http: true,
    "http-outbound": false,
  },
  requests: {
    request: false,
  },
};

export function monitorsConfig() {
  return monitors;
}

export function defaults() {
  return _.keys(
    _.omit(
      _.extend({}, monitors.main, monitors.probe, monitors.requests),
      (val, key) => !val || key === "environment",
    ),
  );
}
