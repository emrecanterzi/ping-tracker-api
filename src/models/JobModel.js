const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: {
    type: String, //"job1"
  },
  url: {
    type: String, // "https://foodergood.com"
  },
  expectedStatus: {
    type: Number, // 200
  },
  maxResponseTime: {
    type: Number, // 500
  },
  delay: {
    type: String, //"3_SEC"
    enum: ["3_SEC", "10_SEC"],
  },
  method: {
    type: String, //"GET"
    enum: ["GET", "POST", "PUT", "DELETE"],
  },
});

module.exports.Job = mongoose.model("Job", JobSchema);
