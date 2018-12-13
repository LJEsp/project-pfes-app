const roleEnums = {
  ADMINISTRATOR: "administrator",
  SALES: "sales",
  OPERATIONS: "operations",
  VIEWER: "viewer",
  properties: {
    ADMINISTRATOR: { name: "Administrator" },
    SALES: { name: "sales" },
    OPERATIONS: { name: "Operations" },
    VIEWER: { name: "Viewer" }
  }
};

const viewEnums = {
  LOGIN: "login",
  MY_JOB_ORDERS: "myJobOrders",
  ALL_JOB_ORDERS: "allJobOrders",
  MANAGE_USERS: "manageUsers",
  properties: {
    LOGIN: { name: "Login" },
    MY_JOB_ORDERS: { name: "My Job Orders" },
    ALL_JOB_ORDERS: { name: "All Job Orders" },
    MANAGE_USERS: { name: "Manage Users" }
  }
};

module.exports = {
  roleEnums,
  viewEnums
};
