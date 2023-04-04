// api下面是next.js的serverless
import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";
import { logger } from "../../lib/utils";
import { frame1, frame2 } from "../../mock/pg";
const log = logger("socket handler");

export function getPgData(pgdata) {
  const result = JSON.parse(JSON.stringify(pgdata));
  // let random = Math.random();
  // if (random > 0.6) {
  result.data.target_pg = {
    data: {
      id: "Tomato-Box",
      source: "Box",
      target: "Dirt",
      type: "dash-line",
      label: "nlp label",
    },
    classes: "dash-line",
  };
  // } else if (random > 0.2) {
  //   return result;
  // } else {
  //   return {
  //     data: null,
  //   };
  // }
  return result;
}

let pgTimer;
let i = 0;
const SocketHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (res.socket?.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const httpServer = res.socket.server;
    const io = new Server(httpServer);

    io.on("error", () => {
      log("error");
    });

    io.on("connection", (socket) => {
      log("id", socket.id);
      const dcenterNamespace = socket.nsp;
      clearInterval(pgTimer);
      // pgTimer = setInterval(() => {
      //   if (i === 0) {
      //     const pg = getPgData(frame2);
      //     dcenterNamespace.emit("pgplus", pg);
      //     i = 1;
      //   } else {
      //     dcenterNamespace.emit("pgplus", getPgData(frame1));
      //     i = 0;
      //   }
      // }, 1000);
      dcenterNamespace.emit("pgplus", getPgData(frame1));
    });
    res.socket.server.io = io;
  }
  res.end();
};

export default SocketHandler;
