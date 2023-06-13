const express = require("express");
const { AuthController } = require("../controllers/AuthController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const authRouter = express.Router();

authRouter.route("/login").post(AuthController.login);
authRouter.route("/logout").post(AuthController.logout);
authRouter.route("/register").post(AuthController.register);
authRouter.route("/profile").all(authMiddleware).get(AuthController.getProfile);

module.exports.authRouter = authRouter;
