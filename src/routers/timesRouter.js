const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { TimesController } = require("../controllers/TimesController");

const timesRouter = express.Router();

timesRouter.route("/").all(authMiddleware).get(TimesController.getTimes);

module.exports.timesRouter = timesRouter;
