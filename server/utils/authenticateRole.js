module.exports = authenticateRole = (userRole, requiredRole) =>
  requiredRole.includes(userRole);

