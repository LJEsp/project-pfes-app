const { roleEnums } = require("./enums");

module.exports = authenticateRole = (userRole, requiredRole) =>
  requiredRole.includes(userRole);

