const validateEmail = (email) => {
  return !!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

module.exports = { validateEmail };
