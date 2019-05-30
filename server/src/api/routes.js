/**
 * @file Main API Endpoints
 * @author Archit <archit5793@gmail.com>
 */

import express from "express";
import SocketController from "./controllers/SocketController";

export default (mqtt, io) => {
  const router = express.Router();
  const socketController = SocketController(io);
  router
    .route("/stacktrace")
    .post(socketController.stackTrace)
    .get(socketController.getTrace);
  router
    .route("/timer")
    .post(socketController.timer)
    .get(socketController.getTimer);
  router
    .route("/audit")
    .post(socketController.audit)
    .get(socketController.getAudit);
  return router;
};
