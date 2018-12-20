// ////////////////////////////////////
// @route   POST api/users/login
// @desc    Login User / Return JWT Token
// @access  Public
module.exports = ({ router, validateLogin, User, bcrypt, jwt, keys }) => {
  router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // >>> Validate login
    const { errors, isValid } = validateLogin(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    // >>> Find user by username in the database
    User.findOne({ username: username })
      .then(user => {
        // >>> Check if user exists
        if (!user) {
          errors.login = "Incorrect login information";
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
            errors.login = "Incorrect login information";
            return res.status(400).json(errors);
          }
        });
      })
      .catch(err => {
        errors.network = "Network error";
        res.status(404).json(errors);
      });
  });
};
