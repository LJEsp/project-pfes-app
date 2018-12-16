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

// ////////////////////////////////////
// @route   GET api/users/test
// @desc    Test users route
// @access  Public
router.get("/test", (req, res) =>
  res.status(200).json({ msg: "Route Users works" })
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
// @access  Private (admin)
require("./users/get")({ router, User, passport, roleEnums });

module.exports = router;
