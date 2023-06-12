const express = require("express");
const { indexRouter } = require("./routers");
const ErrorHander = require("./error/ErrorHandler");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(indexRouter);

app.use(ErrorHander);

module.exports.app = app;
