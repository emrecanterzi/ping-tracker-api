const onConnection = (io, socket) => {
  socket.emit("message", "hello " + socket.user.firstName);
};

module.exports.onConnection = onConnection;
