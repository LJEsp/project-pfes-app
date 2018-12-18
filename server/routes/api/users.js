const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const { roleEnums } = require("../../utils/enums");

const User = require("../../models/User");

const validateLogin = require("../../validation/validateLogin");
const validateRegister = require("../../validation/validateRegister");
const validateEditUser = require("../../validation/validateEditUser");

// ////////////////////////////////////
// @route   GET api/users/test
// @desc    Test users route
// @access  Public
router.get("/test", (req, res) =>
  res.status(200).json({ message: "Users route works" })
);

// ////////////////////////////////////
// @route   POST api/users/login
// @desc    Login User / Return JWT Token
// @access  Public
require("./users/login")({ router, validateLogin, User, bcrypt, jwt, keys });

// ////////////////////////////////////
// @route   POST api/users/register
// @desc    Register new user
// @access  Private (ADMINISTRATOR)
require("./users/register")({
  router,
  validateRegister,
  User,
  bcrypt,
  jwt,
  passport,
  roleEnums
});

// ////////////////////////////////////
// @route   GET api/users/all
// @desc    Get all users
// @access  Private (ADMINISTRATOR)
require("./users/get")({ router, User, passport, roleEnums });

// ////////////////////////////////////
// @route   PUT api/users/:userId
// @desc    Edit user
// @access  Private (ADMINISTRATOR)
require("./users/edit")({
  router,
  passport,
  roleEnums,
  User,
  validateEditUser
});

// ////////////////////////////////////
// @route   DELETE api/users/:userId
// @desc    Delete user
// @access  Private (ADMINISTRATOR)
require("./users/delete")({ router, passport, roleEnums, User });

module.exports = router;
