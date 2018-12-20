// ////////////////////////////////////
// @route   GET api/users/:userId
// @desc    Get user using id
// @access  Private (ADMINISTRATOR)
module.exports = ({ router, User, passport, roleEnums }) => {
  router.get(
    "/:userId",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      const errors = {};

      // Only an admin can see all users
      if (req.user.role !== roleEnums.ADMINISTRATOR) {
        errors.role = "Unauthorized";
        return res.status(401).json(errors);
      }

      User.findById(req.params.userId)
        .then(user => {
          if (!user) {
            errors.user = "User was not found";
            return res.status(404).json(errors);
          }

          res.status(200).json(user);
        })
        .catch(err => {
          errors.user = "User was not found";
          return res.status(404).json(errors);
        });
    }
  );
};
