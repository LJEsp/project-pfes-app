// ////////////////////////////////////
// @route   POST api/users/register
// @desc    Register new user
// @access  Private (ADMINISTRATOR)
module.exports = ({
  router,
  validateRegister,
  User,
  bcrypt,
  passport,
  roleEnums
}) => {
  router.post(
    "/register",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      // >>> Only an admin can register a new user
      if (req.user.role !== roleEnums.ADMINISTRATOR) {
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
          return res.status(400).json({ username: "Username already exists" });
        } else {
          // >>> Create new user
          const newUser = new User({
            username: req.body.username,
            role: req.body.role,
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
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
                  res
                    .status(200)
                    .json({ success: "User successfully created." })
                )
                .catch(err => console.log(err));
            });
          });
        }
      });
    }
  );
};
