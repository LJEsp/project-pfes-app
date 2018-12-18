const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const { roleEnums } = require("../../utils/enums");

const User = require("../../models/User");
const DomesticJo = require("../../models/DomesticJo");
const InternationalJo = require("../../models/InternationalJo");

const validateJo = require("../../validation/validateJo");

// ////////////////////////////////////
// @route   GET api/jo/test
// @desc    Test jo route
// @access  Public
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Jo route works" });
});

// ////////////////////////////////////
// @route   POST api/jo
// @desc    Create job order
// @access  Private (SALES, ADMINISTRATOR)
require("./jo/create")({
  router,
  validateJo,
  User,
  DomesticJo,
  InternationalJo,
  jwt,
  passport,
  roleEnums
});

module.exports = router;
