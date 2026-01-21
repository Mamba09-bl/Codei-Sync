// const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const initSocket = require("./socket"); // path
// const  connectDB = require("./lib/db");

// const app = express();
// app.use(cors());
// await connectDB(); // ✅ REQUIRED

// const server = http.createServer(app);

// // 🔥 initialize socket HERE
// initSocket(server);

// server.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const initSocket = require("./socket");
// const connectDB = require("./lib/db");

// const app = express();
// app.use(cors());

// const server = http.createServer(app);

// // 🔥 START SERVER PROPERLY
// const startServer = async () => {
//   try {
//     await connectDB(); // ✅ CONNECT ONCE
//     initSocket(server);

//     const PORT = process.env.PORT || 5000;
//     server.listen(PORT, () => {
//       console.log("Server running on port", PORT);
//     });
//   } catch (err) {
//     console.error("Server failed to start:", err);
//     process.exit(1);
//   }
// };

// startServer(); agha jeee done finalaa

// const express = require("express");
// const http = require("http");
// const next = require("next");
// const initSocket = require("./lib/socket");
// const connectDB = require("./lib/db");

// const dev = process.env.NODE_ENV !== "production";
// const appNext = next({ dev });
// const handle = appNext.getRequestHandler();

// const app = express();
// const server = http.createServer(app);

// appNext.prepare().then(async () => {
//   await connectDB();
//   initSocket(server);

//   app.all("*", (req, res) => {
//     return handle(req, res);
//   });

//   const PORT = process.env.PORT || 5000;
//   server.listen(PORT, () => {
//     console.log("🚀 Server + Socket.IO running on port", PORT);
//   });
// }); done

import express from "express";
import http from "http";
import next from "next";
import connectDB from "./lib/db.js";
import initSocket from "./lib/socket.js";

const PORT = process.env.PORT || 10000;
const dev = process.env.NODE_ENV !== "production";

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

await nextApp.prepare();

const app = express();
const server = http.createServer(app);

// DB + Socket
await connectDB();
initSocket(server);

// 🔥 THIS LINE IS WHAT YOU WERE MISSING ss
app.all("*", (req, res) => {
  return handle(req, res);
});

server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
