/**
 * @file Entry point for API
 * @author Archit <archit5793@gmail.com>
 */

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import mqtt from "mqtt";
import http from "http";
import cors from "cors";
import socketIO from "socket.io";
import router from "./api/routes";
import config from "./config";
import { defaults } from "./monitors";

mongoose.connect(
  config.database.local,
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Connected to MongoDB");
    }
  },
);

const monitors = defaults();
const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);
const mqttConnection = mqtt.connect(
  config.broker,
  { clientId: "arcx" },
);
mqttConnection.on("connect", () => {
  console.log("connected to broker");
  mqttConnection.subscribe(monitors, () => {
    console.log("subscribed to topics");
    mqttConnection.on("message", (topic, message) => {
      io.emit(topic.toString(), JSON.parse(message));
    });
  });
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router(mqttConnection, io));

server.listen(process.env.port || config.port, () => {
  console.log(`Listening at ${process.env.port || config.port}`);
});
