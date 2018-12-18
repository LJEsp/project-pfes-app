const authenticateRole = require("../../../utils/authenticateRole");

// ////////////////////////////////////
// @route   POST api/jo
// @desc    Create job order
// @access  Private (SALES, ADMINISTRATOR)
module.exports = ({
  router,
  validateJo,
  User,
  DomesticJo,
  InternationalJo,
  jwt,
  passport,
  roleEnums
}) => {
  router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      // if (
      //   req.user.userType !== roleEnums.ADMINISTRATOR ||
      //   req.user.userType !== roleEnums.SALES
      // ) {
      //   return res.status(400).json({ message: "Unauthorized " });
      // }

      // >>> I created a function version of the if statement above
      if (
        !authenticateRole(req.user.role, [
          roleEnums.ADMINISTRATOR,
          roleEnums.SALES
        ])
      ) {
        return res.status(400).json({ message: "Unauthorized " });
      }

      res.status(200).json({ message: "test" });
    }
  );
};
