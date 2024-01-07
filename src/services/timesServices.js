const { Times } = require("../models/TimesModel");

const getTimesService = async () => {
  const times = await Times.find({});

  return { success: true, data: times };
};

module.exports = {
  getTimesService,
};
