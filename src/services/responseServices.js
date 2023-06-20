const { Response } = require("../models/ResponseModel");

const getResponsesService = async ({ userId, jobId }) => {
  const responses = await Response.find({ userId, jobId });

  return { success: true, data: responses };
};

module.exports = {
  getResponsesService,
};
