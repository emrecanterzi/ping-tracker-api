const express = require("express");
const { indexRouter } = require("./routers");
const ErrorHander = require("./error/ErrorHandler");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(indexRouter);

app.use(ErrorHander);

module.exports.app = app;
