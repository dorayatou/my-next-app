import { Socket, io } from "socket.io-client";

const SOCKET_URL = "http://10.1.100.60:5003";
// const SOCKET_URL = "http://10.1.31.207:5003";
// const SOCKET_URL = "http://localhost:3000/api/socket";

let socket: Socket;
export function getAibabySocket() {
  console.log("getAibabySocket");
  if (!socket) {
    socket = io(`${SOCKET_URL}/aibaby`, {
      transports: ["websocket"],
    });
  }
  return socket;
}
