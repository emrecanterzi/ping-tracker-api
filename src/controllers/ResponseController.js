const expressAsyncHandler = require("express-async-handler");
const {
  getResponsesService,
  getResponseIdsService,
} = require("../services/responseServices");

class ResponseController {
  static getResponseIds = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;

    const response = await getResponseIdsService({ userId });

    res.json(response);
  });

  static getResponses = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { jobId } = req.params;

    const response = await getResponsesService({ userId, jobId });

    res.json(response);
  });
}

module.exports.ResponseController = ResponseController;
