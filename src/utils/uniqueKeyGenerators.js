const jobIdGenerator = () => {
  return Date.now();
};
const userIdGenerator = () => {
  return Date.now();
};

module.exports = {
  jobIdGenerator,
  userIdGenerator,
};
