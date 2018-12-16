// ////////////////////////////////////
// @route   GET api/users/all
// @desc    Get all users
// @access  Private (admin)
module.exports = ({ router, User, passport, roleEnums }) => {
  router.get(
    "/all",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      // Only an admin can see all users
      if (req.user.role !== roleEnums.ADMINISTRATOR) {
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
};
