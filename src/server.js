const http = require("http");
const { app } = require("./app");
const dotenv = require("dotenv");
const path = require("path");
const { default: mongoose } = require("mongoose");

dotenv.config({
  path: path.join(__dirname, "config", ".env"),
});

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/test";

const server = http.createServer(app);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
  server.listen(PORT, () => {
    console.log(`server listening http://localhost:${PORT}`);
  });
});
