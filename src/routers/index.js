const express = require("express");
const { authRouter } = require("./authRouter");
const { jobRouter } = require("./jobRouter");
const { responseRouter } = require("./responseRouter");
const { timesRouter } = require("./timesRouter");

const indexRouter = express.Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/job", jobRouter);
indexRouter.use("/response", responseRouter);
indexRouter.use("/times", timesRouter);

module.exports.indexRouter = indexRouter;
