// import { Server } from "socket.io";

// export default function initSocket(server) {
//   const io = new Server(server, {
//     cors: {
//       origin: "*",
//     },
//   });

//   io.on("connection", (socket) => {
//     console.log("Socket connected:", socket.id);
//   });
// }
import { Server } from "socket.io";

export default function initSocket(server) {
  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("Socket connecteddded:", socket.id);

    socket.onAny((event, ...args) => {
      console.log("EVENT:", event, args);
    });

    socket.on("join-room", ({ roomId, name }) => {
      console.log("JOIN ROOM:", roomId, name);
      socket.join(roomId);
    });

    socket.on("send-message", (data) => {
      io.to(data.roomId).emit("receive-message", data);
    });
  });
}
