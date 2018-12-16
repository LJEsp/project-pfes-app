const Validator = require("validator");
const _ = require("lodash");

module.exports = function validateEditUser(data) {
  let errors = {};

  data.role = !_.isEmpty(data.role) ? data.role : "";
  data.firstName = !_.isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !_.isEmpty(data.lastName) ? data.lastName : "";
  data.middleName = !_.isEmpty(data.middleName) ? data.middleName : "";
  data.email = !_.isEmpty(data.email) ? data.email : "";
  data.contact = !_.isEmpty(data.contact) ? data.contact : "";

  // firstName
  if (!Validator.isLength(data.firstName, { min: 3, max: 30 })) {
    errors.firstName = "Firstname must be between 2 to 30 characters";
  }
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "Firstname is required";
  }

  // lastName
  if (!Validator.isLength(data.lastName, { min: 3, max: 30 })) {
    errors.lastName = "Lastname must be between 2 to 30 characters";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Lastname is required";
  }

  // email validation
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  // contact validation
  if (!Validator.isLength(data.contact, { min: 4, max: 15 })) {
    errors.contact = "Contact number must be between 4 to 15 characters";
  }

  if (Validator.isEmpty(data.contact)) {
    errors.contact = "Contact is required";
  }

  return {
    errors: errors,
    isValid: _.isEmpty(errors)
  };
};
