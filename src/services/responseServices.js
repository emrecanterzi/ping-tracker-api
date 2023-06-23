const { Response } = require("../models/ResponseModel");

const getResponseIdsService = async ({ userId }) => {
  const responses = new Set(
    (await Response.find({ userId }).select("jobId")).map((job) => job.jobId)
  );

  return { success: true, data: Array.from(responses) };
};

const getResponsesService = async ({ userId, jobId }) => {
  const responses = await Response.find({ userId, jobId });

  return { success: true, data: responses };
};

module.exports = { getResponseIdsService, getResponsesService };
