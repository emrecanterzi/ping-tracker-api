const CustomError = require("../error/CustomError");
const { Job } = require("../models/JobModel");
const { jobIdGenerator } = require("../utils/uniqueKeyGenerators");

const getJobsService = async ({ userId }) => {
  const jobs = await Job.find({ userId, isDeleted: false });

  return { success: true, data: jobs };
};

const getJobByJobIdService = async ({ userId, jobId }) => {
  const job = await Job.findOne({ userId, jobId, isDeleted: false });

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
  requestBody,
  requestHeaders,
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
    requestBody,
    requestHeaders,
    isDeleted: false,
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
  requestBody,
  requestHeaders,
}) => {
  const job = await Job.findOneAndUpdate(
    { jobId, userId, isDeleted: false },
    {
      title,
      url,
      expectedStatus,
      maxResponseTime,
      delay,
      method,
      isActive,
      requestBody,
      requestHeaders,
    },
    { new: true }
  );

  if (!job) {
    throw new CustomError({ status: 404, message: "JOB_NOT_FOUND" });
  }

  return { success: true, data: job };
};

const removeJobByJobIdService = async ({ jobId, userId }) => {
  const job = await Job.findOneAndUpdate(
    { userId, jobId },
    { isDeleted: true, isActive: false },
    { new: true }
  );

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
