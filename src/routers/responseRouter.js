const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { ResponseController } = require("../controllers/ResponseController");

const responseRouter = express.Router();

responseRouter
  .route("/")
  .all(authMiddleware)
  .get(ResponseController.getResponseIds);

responseRouter
  .route("/:jobId")
  .all(authMiddleware)
  .get(ResponseController.getResponses);

module.exports.responseRouter = responseRouter;
