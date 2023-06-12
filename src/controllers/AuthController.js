const expressAsyncHandler = require("express-async-handler");
const {
  loginService,
  getProfileService,
  registerService,
  logoutService,
} = require("../services/authServices");
const { createToken } = require("../utils/jwtHelper");

class AuthController {
  static login = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const response = await loginService({ email, password });

    const token = createToken({
      email,
      expireDay: Date.now() + 1000 * 60 * 60 * 24,
    });

    res.cookie("token", token).json(response);
  });

  static logout = expressAsyncHandler(async (req, res) => {
    const response = await logoutService();

    res.json(response);
  });

  static register = expressAsyncHandler(async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const response = await registerService({
      email,
      password,
      firstName,
      lastName,
    });

    const token = createToken({
      email,
      expireDay: Date.now() + 1000 * 60 * 60 * 24,
    });

    res.cookie("token", token).json(response);
  });

  static getProfile = expressAsyncHandler(async (req, res) => {
    const response = await getProfileService();

    res.json(response);
  });
}

module.exports.AuthController = AuthController;
