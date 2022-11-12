const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const authRouter = require("./Routes/Auth");
const productRouter = require("./Routes/pro");
const connection = require("./db/db");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/auth", authRouter);
app.use("/product", productRouter);

app.get("/", async (req, res) => {
  res.send("users here");
});

const PORT = process.env.PORT || 8080;

// <-----------------------Websocket-------------------------------->

let time;
const data = [
  {
    name: 1,
    x: Math.random() * 6,
    y: Math.random() * 6,
  },
  {
    name: 2,
    x: Math.random() * 6,
    y: Math.random() * 6,
  },
  {
    name: 3,
    x: Math.random() * 6,
    y: Math.random() * 6,
  },
  {
    name: 4,
    x: Math.random() * 6,
    y: Math.random() * 6,
  },
  {
    name: 5,
    x: Math.random() * 6,
    y: Math.random() * 6,
  },
  {
    name: 6,
    x: Math.random() * 6,
    y: Math.random() * 6,
  },
  {
    name: 7,
    x: Math.random() * 6,
    y: Math.random() * 6,
  },
];
const httpServer = http.createServer(app);

const server = new socketio.Server(httpServer, {
  cors: {
    origin: "*",
  },
});
server.on("connection", (socket) => {
  console.log("connected");
  if (time) clearInterval(time);
  if (data.length > 5) {
    data.reverse().pop();
    data.reverse();
  }
  data.push({
    name: data[data.length - 1].name + 1,
    x: Math.random() * 6,
    y: Math.random() * 6,
  });

  setInterval(() => {
    socket.emit("message", data);
  }, 1000);
});

httpServer.listen(PORT, async () => {
  await connection;
  console.log("listening on http://localhost:8080");
});
