const expressAsyncHandler = require("express-async-handler");
const {
  loginService,
  getProfileService,
  registerService,
  logoutService,
} = require("../services/authServices");

class AuthController {
  static login = expressAsyncHandler(async (req, res) => {
    const response = await loginService();

    res.json(response);
  });
  static logout = expressAsyncHandler(async (req, res) => {
    const response = await logoutService();

    res.json(response);
  });
  static register = expressAsyncHandler(async (req, res) => {
    const response = await registerService();

    res.json(response);
  });
  static getProfile = expressAsyncHandler(async (req, res) => {
    const response = await getProfileService();

    res.json(response);
  });
}

module.exports.AuthController = AuthController;
