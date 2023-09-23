const CustomError = require("../error/CustomError");
const { User } = require("../models/UserModel");
const { decodeToken } = require("../utils/jwtHelper");

const socketIoAuthMiddleware = async (socket, next) => {
  const token =
    (
      socket.request.headers.cookie ||
      socket.request.headers.token ||
      socket.handshake.auth.token
    )
      ?.split("=")[1]
      ?.split(";")[0] ||
    socket.request.headers.token ||
    socket.handshake.auth.token;

  if (!token) {
    throw new CustomError({ status: 400, message: "YOU_ARE_NOT_LOGINED" });
  }

  const { email } = decodeToken(token);
  socket.user = await User.findOne({ email });

  next();
};

module.exports = socketIoAuthMiddleware;
