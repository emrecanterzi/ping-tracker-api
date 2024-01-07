const http = require("http");
const { app } = require("./app");
const dotenv = require("dotenv");
const path = require("path");
const { default: mongoose } = require("mongoose");
const { Server } = require("socket.io");
const { onConnection } = require("./socket");
const socketIoAuthMiddleware = require("./middlewares/socketIoAuthMiddleware");
const {
  socketIoMiddlewareErrorHandler,
} = require("./error/SocketErrorHandler");
const { Response } = require("./models/ResponseModel");
const { SeedDataManager } = require("mongoose-seed-manager");

dotenv.config({
  path: path.join(__dirname, "config", ".env"),
});

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/test";

const server = http.createServer(app);
const io = new Server(server, {
  cors: { credentials: true, origin: ["http://localhost:3000"] },
});

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDataManager = new SeedDataManager(path.join(__dirname, "Base"), [
  mongoose.connection,
]);

mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
  seedDataManager.init();
  startServer();
});

function startServer() {
  if (!server.listening) {
    server.listen(PORT, () => {
      console.log(`server listening http://localhost:${PORT}`);
    });
  }
}

io.use(socketIoMiddlewareErrorHandler(socketIoAuthMiddleware));
io.use((socket, next) => {
  socket.id = socket.user.userId;
  next();
});
io.on("connection", (socket) => onConnection(io, socket));

const ResponseStream = Response.watch({});

ResponseStream.on("change", (data) => {
  io.to(data.fullDocument.userId).emit("update", data.fullDocument);
});
