export default {
  port: 9000,
  database: {
    local: "mongodb://localhost:9090/securebox",
    production: "",
  },
  broker: "mqtt://localhost:1883",
};
