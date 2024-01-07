const mongoose = require("mongoose");

const TimesSchema = new mongoose.Schema({
  timeId: { type: String, required: true, unique: true },
  label: { type: String, required: true },
  cronExpression: { type: String, required: true },
});

module.exports.Times = mongoose.model("Times", TimesSchema);
