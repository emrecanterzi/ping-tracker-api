const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  expectedStatus: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  maxResponseTime: {
    type: Number,
    required: true,
  },
  responseTime: {
    type: Number,
    required: true,
  },
  requestBody: {
    type: Object,
    default: {},
  },
  requestHeaders: {
    type: Object,
    default: {},
  },
  responseBody: {
    type: Object,
    default: {},
  },
  responseHeaders: {
    type: Object,
    default: {},
  },
});

module.exports.Response = mongoose.model("Response", ResponseSchema);
