const rolesEnums = {
  ADMINISTRATOR: 1,
  SALES: 2,
  OPERATIONS: 3,
  VIEWER: 4,
  properties: {
    ADMINISTRATOR: { name: "Administrator" },
    SALES: { name: "sales" },
    OPERATIONS: { name: "Operations" },
    VIEWER: { name: "Viewer" }
  }
};

const viewsEnums = {
  LOGIN: 1,
  MY_JOB_ORDERS: 2,
  ALL_JOB_ORDERS: 3,
  MANAGE_USERS: 4,
  properties: {
    LOGIN: { name: "Login" },
    MY_JOB_ORDERS: { name: "My Job Orders" },
    ALL_JOB_ORDERS: { name: "All Job Orders" },
    MANAGE_USERS: { name: "Manage Users" }
  }
};

module.exports = {
  rolesEnums,
  viewsEnums
};
