const express = require("express");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router.js");
const userRouter = require("../users/users-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = server;