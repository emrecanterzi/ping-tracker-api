const express = require("express");
const { authRouter } = require("./authRouter");
const { jobRouter } = require("./jobRouter");

const indexRouter = express.Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/job", jobRouter);

module.exports.indexRouter = indexRouter;
