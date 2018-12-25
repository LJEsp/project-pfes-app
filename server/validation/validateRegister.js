const Validator = require("validator");
const _ = require("lodash");

module.exports = function validateRegister(data) {
  let errors = {};

  data.username = !_.isEmpty(data.username) ? data.username : "";
  data.role = !_.isEmpty(data.role) ? data.role : "";
  data.firstName = !_.isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !_.isEmpty(data.lastName) ? data.lastName : "";
  data.middleName = !_.isEmpty(data.middleName) ? data.middleName : "";
  data.email = !_.isEmpty(data.email) ? data.email : "";
  data.contact = !_.isEmpty(data.contact) ? data.contact : "";
  data.password = !_.isEmpty(data.password) ? data.password : "";
  data.password2 = !_.isEmpty(data.password2) ? data.password2 : "";

  // >>> username
  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = "Username must be between 2 to 30 characters.";
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required.";
  }

  // >>> role
  if (Validator.isEmpty(data.role)) {
    errors.role = "User type is required.";
  }

  // >>> firstName
  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = "First name must be between 2 to 30 characters.";
  }
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name is required.";
  }

  // >>> lastName
  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = "Last name must be between 2 to 30 characters.";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name is required.";
  }

  // >>> middleName
  /*
  if (!Validator.isLength(data.middleName, { min: 2, max: 30 })) {
    errors.middleName = "Middle name must be between 2 to 30 characters.";
  }
  if (Validator.isEmpty(data.middleName)) {
    errors.middleName = "Middle name is required.";
  }
  */

  // >>> email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid.";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required.";
  }

  // >>> contact
  if (!Validator.isLength(data.contact, { min: 4, max: 15 })) {
    errors.contact = "Contact number must be between 4 to 15 characters.";
  }
  if (Validator.isEmpty(data.contact)) {
    errors.contact = "Contact is required.";
  }

  // >>> password
  if (!Validator.isLength(data.password, { min: 6 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  // >>> password2
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Password confirmation is required";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords do not match";
  }

  return {
    errors: errors,
    isValid: _.isEmpty(errors)
  };
};
