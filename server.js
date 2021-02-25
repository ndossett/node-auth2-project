const express = require("express");
const cors = require("cors");

const userRouter = require("./api/user-router");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/user", userRouter);

server.get("/", (req, res) => {
    res.status(200).json("Welcome to user api");
});

module.exports = server;