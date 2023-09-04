function socketIoMiddlewareErrorHandler(cb) {
  return async (socket, next) => {
    try {
      await cb(socket, next);
    } catch (err) {
      socket.conn.close();
    }
  };
}

const socketIoErrorHandler = (socket, cb, params) => {
  cb(params).catch((err) => {
    socket.emit("ERROR", {
      status: err.status,
      message: err.message,
    });
  });
};

module.exports = {
  socketIoMiddlewareErrorHandler,
  socketIoErrorHandler,
};
