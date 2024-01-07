const expressAsyncHandler = require("express-async-handler");
const { getTimesService } = require("../services/timesServices");

class TimesController {
  static getTimes = expressAsyncHandler(async (req, res) => {
    const response = await getTimesService();

    res.json(response);
  });
}

module.exports.TimesController = TimesController;
