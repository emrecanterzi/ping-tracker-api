const expressAsyncHandler = require("express-async-handler");
const {
  getJobsService,
  createJobService,
  getJobByJobIdService,
  updateJobByJobIdService,
  removeJobByJobIdService,
} = require("../services/jobService");

class JobController {
  static getJobs = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;

    const response = await getJobsService({ userId });

    res.json(response);
  });

  static getJobByJobId = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { jobId } = req.params;

    const response = await getJobByJobIdService({ userId, jobId });

    res.json(response);
  });

  static createJob = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const {
      title,
      url,
      expectedStatus,
      maxResponseTime,
      delay,
      method,
      isActive,
    } = req.body;

    const response = await createJobService({
      userId,
      title,
      url,
      expectedStatus,
      maxResponseTime,
      delay,
      method,
      isActive,
    });

    res.json(response);
  });

  static updateJobByJobId = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { jobId } = req.params;
    const {
      title,
      url,
      expectedStatus,
      maxResponseTime,
      delay,
      method,
      isActive,
    } = req.body;

    const response = await updateJobByJobIdService({
      jobId,
      userId,
      title,
      url,
      expectedStatus,
      maxResponseTime,
      delay,
      method,
      isActive,
    });

    res.json(response);
  });

  static removeJobByJobId = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { jobId } = req.params;

    const response = await removeJobByJobIdService({ jobId, userId });

    res.json(response);
  });
}

module.exports.JobController = JobController;
