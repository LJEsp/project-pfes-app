// ////////////////////////////////////
// @route   PUT api/users/:userId
// @desc    Edit user
// @access  Private (ADMINISTRATOR)
module.exports = ({ router, passport, roleEnums, User, validateEditUser }) => {
  router.put(
    "/:userId",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      if (req.user.role !== roleEnums.ADMINISTRATOR) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // >>> Validate edit inputs
      const { errors, isValid } = validateEditUser(req.body);

      // >>> Check validation
      if (!isValid) {
        return res.status(400).json(errors);
      }

      const userEdits = {};
      userEdits.role = req.body.role;
      userEdits.firstName = req.body.firstName;
      userEdits.lastName = req.body.lastName;
      if (req.body.middleName) userEdits.middleName = req.body.middleName;
      userEdits.email = req.body.email;
      userEdits.contact = req.body.contact;
      userEdits.isActive = req.body.isActive;

      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: userEdits },
        { new: true }
      ).then(profile => res.json(profile));
    }
  );
};
