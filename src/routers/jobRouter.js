const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { JobController } = require("../controllers/JobController");

const jobRouter = express.Router();

jobRouter
  .route("/")
  .all(authMiddleware)
  .get(JobController.getJobs)
  .post(JobController.createJob);

jobRouter
  .route("/:jobId")
  .all(authMiddleware)
  .get(JobController.getJobByJobId)
  .post(JobController.updateJobByJobId)
  .delete(JobController.removeJobByJobId);

module.exports.jobRouter = jobRouter;
