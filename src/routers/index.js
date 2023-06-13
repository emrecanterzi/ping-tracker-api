const express = require("express");
const { authRouter } = require("./authRouter");

const indexRouter = express.Router();

indexRouter.use("/auth", authRouter);

module.exports.indexRouter = indexRouter;
