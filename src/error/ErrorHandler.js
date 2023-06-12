const ErrorHander = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ status: err.status, message: err.message });
  } else {
    if (err.name == "JsonWebTokenError") {
      res.status(401).json({ status: 401, message: "YOU_ARE_NOT_LOGINED" });
    } else {
      res.status(500).json({ status: 500, message: "SOMETHING_WENT_WRONG" });
    }
  }
};

module.exports = ErrorHander;
