const CustomError = require("../error/CustomError");
const { User } = require("../models/UserModel");
const { decodeToken } = require("../utils/jwtHelper");
const expressAsyncHandler = require("express-async-handler");

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  const token =
    req.cookies.token || req.headers.token || req.query.token || req.body.token;

  if (!token) {
    throw new CustomError({ status: 401, message: "YOU_ARE_NOT_LOGINED" });
  }

  const data = decodeToken(token);

  if (!data) {
    throw new CustomError({ status: 401, message: "YOU_ARE_NOT_LOGINED" });
  }

  // if(data.createdTime){ } // ! check token expiration

  req.user = await User.findOne({ email: data.email });

  next();
});

module.exports.authMiddleware = authMiddleware;
