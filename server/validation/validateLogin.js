const Validator = require("validator");
const _ = require("lodash");

module.exports = function validateLogin(data) {
  let errors = {};

  data.username = !_.isEmpty(data.username) ? data.username : "";
  data.password = !_.isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.username)) {
    errors.login = "Incorrect login information";
  }

  if (Validator.isEmpty(data.password)) {
    errors.login = "Incorrect login information";
  }

  return {
    errors: errors,
    isValid: _.isEmpty(errors)
  };
};
