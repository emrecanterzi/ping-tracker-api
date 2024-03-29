const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String, //"job1"
    required: true,
  },
  url: {
    type: String, // "https://foodergood.com"
    required: true,
  },
  expectedStatus: {
    type: Number, // 200
    required: true,
  },
  maxResponseTime: {
    type: Number, // 500
    required: true,
  },
  delay: {
    type: String, //"3_SEC"
    required: true,
  },
  method: {
    type: String, //"GET"
    enum: ["GET", "POST", "PUT", "DELETE"],
    required: true,
  },
  isActive: {
    type: Boolean, // true
    default: true,
  },
  isDeleted: {
    type: Boolean, // true
    default: false,
  },
  requestBody: {
    type: Object,
    default: {},
  },
  requestHeaders: {
    type: Object,
    default: {},
  },
});

module.exports.Job = mongoose.model("Job", JobSchema);
