// ////////////////////////////////////
// @route   DELETE api/users/:userId
// @desc    Delete user
// @access  Private (ADMINISTRATOR)
module.exports = ({ router, passport, roleEnums, User }) => {
  router.delete(
    "/:userId",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      if (req.user.role !== roleEnums.ADMINISTRATOR) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      User.findByIdAndRemove(req.params.userId, (err, user) => {
        if (err) return res.status(500).send(err);

        res.status(200).json(user);
      });
    }
  );
};
