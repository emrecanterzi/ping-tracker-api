const CustomError = require("../error/CustomError");
const { Job } = require("../models/JobModel");
const { jobIdGenerator } = require("../utils/uniqueKeyGenerators");

const getJobsService = async ({ userId }) => {
  const jobs = await Job.find({ userId });

  return { success: true, data: jobs };
};

const getJobByJobIdService = async ({ userId, jobId }) => {
  const job = await Job.findOne({ userId, jobId });

  if (!job) {
    throw new CustomError({ status: 404, message: "JOB_NOT_FOUND" });
  }

  return { success: true, data: job };
};

const createJobService = async ({
  userId,
  title,
  url,
  expectedStatus,
  maxResponseTime,
  delay,
  method,
  isActive,
}) => {
  const job = new Job({
    userId,
    jobId: jobIdGenerator(),
    title,
    url,
    expectedStatus,
    maxResponseTime,
    delay,
    method,
    isActive,
  });

  await job.save();

  return { success: true, data: job };
};

const updateJobByJobIdService = async ({
  jobId,
  userId,
  title,
  url,
  expectedStatus,
  maxResponseTime,
  delay,
  method,
  isActive,
}) => {
  const job = await Job.findOneAndUpdate(
    { jobId, userId },
    {
      title,
      url,
      expectedStatus,
      maxResponseTime,
      delay,
      method,
      isActive,
    },
    { new: true }
  );

  if (!job) {
    throw new CustomError({ status: 404, message: "JOB_NOT_FOUND" });
  }

  return { success: true, data: job };
};

const removeJobByJobIdService = async ({ jobId, userId }) => {
  const job = await Job.findOneAndDelete({ userId, jobId });

  if (!job) {
    throw new CustomError({ status: 404, message: "JOB_NOT_FOUND" });
  }

  return { success: true, data: job };
};

module.exports = {
  getJobsService,
  createJobService,
  getJobByJobIdService,
  updateJobByJobIdService,
  removeJobByJobIdService,
};
