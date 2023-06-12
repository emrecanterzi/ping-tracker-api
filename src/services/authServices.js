const CustomError = require("../error/CustomError");
const { User } = require("../models/UserModel");
const { validateEmail } = require("../utils/validators");

const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new CustomError({ status: 401, message: "YOU_NOT_REGISTERED" });
  }

  if (!user.comparePassword(password)) {
    throw new CustomError({ status: 400, message: "PASSWORD_MISMATCH" });
  }

  return { success: true, data: user };
};

const logoutService = async () => {
  return { success: true, data: "LOGOUT_SUCCESSFULLY" };
};

const registerService = async ({ email, firstName, lastName, password }) => {
  if (!validateEmail(email)) {
    throw new CustomError({ status: 400, message: "EMAIL_IS_NOT_VALID" });
  }
  const user = new User({ email, firstName, lastName, password });

  await user.save();

  return { success: true, data: user };
};

const getProfileService = async ({ email }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError(ErrorTypes.ClientErrors.USER_NOT_FOUND);
  }

  return { success: true, data: user };
};

module.exports = {
  loginService,
  logoutService,
  registerService,
  getProfileService,
};
