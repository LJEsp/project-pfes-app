const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

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
router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // >>> Validate login
  const { errors, isValid } = validateLogin(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Find user by username in the database
  User.findOne({ username: username })
    .then(user => {
      // >>> Check if user exists
      if (!user) {
        errors.username = "User not found";
        return res.status(404).json(errors);
      }

      // >>> Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // >>> Passwords matched, create JWT payload
          const payload = {
            id: user.id,
            username: user.username,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName,
            middleName: user.middleName,
            email: user.email,
            contact: user.contact,
            dateAdded: user.dateAdded,
            logsAdded: user.logsAdded,
            logsCompleted: user.logsCompleted
          };

          // >>> Sign token (expires in 1 hour / 3600 seconds)
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res
                .status(200)
                .json({ success: true, token: "Bearer " + token, payload });
            }
          );
        } else {
          errors.credentials = "Incorrect login information";
          return res.status(400).json(errors);
        }
      });
    })
    .catch(err => {
      errors.network = "Network error";
      res.status(404).json(errors);
    });
});

// ////////////////////////////////////
// @route   POST api/users/register
// @desc    Register new user
// @access  Private (admin)
router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // >>> Only an admin can register a new user
    if (req.user.role !== "admin") {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // >>> Validate registration
    const { errors, isValid } = validateRegister(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    User.findOne({ username: req.body.username }).then(user => {
      // >>> Check to see if the username already exists in the database
      if (user) {
        return res.status(400).json({ error: "Username already exists" });
      } else {
        // >>> Create new user
        const newUser = new User({
          username: req.body.username,
          role: req.body.role,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          middleName: req.body.middleName,
          email: req.body.email,
          contact: req.body.contact,
          password: req.body.password
        });

        // >>> Generate hash for password
        bcrypt.genSalt(12, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            newUser
              .save()
              .then(user =>
                res.status(400).json({ success: "User successfully created." })
              )
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
);

// ////////////////////////////////////
// @route   GET api/users/all
// @desc    Get all users
// @access  Private (admin)
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Only an admin can see all users
    if (req.user.role !== "admin") {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const errors = {};

    User.find()
      .select("-password")
      .then(users => {
        if (!users) {
          errors.users = "There are no users";
          return res.status(404).json(errors);
        }

        res.json(users);
      })
      .catch(err => res.status(404).json({ users: "There are no users" }));
  }
);

module.exports = router;
