const express = require("express");
const { indexRouter } = require("./routers");
const ErrorHander = require("./error/ErrorHandler");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(indexRouter);

app.use(ErrorHander);

module.exports.app = app;
