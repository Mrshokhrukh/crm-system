import { io } from "socket.io-client";

const socket = io(process.env.BASE_URL);

socket.on("connect", () => {
  console.log("soket server is connected");
});
socket.on("disconnect", () => {
  console.log("disconnected from websocket");
});

export default socket;
