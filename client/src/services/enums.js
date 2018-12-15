const viewEnums = {
  LOGIN: "LOGIN",
  MY_JOB_ORDERS: "MY_JOB_ORDERS",
  ALL_JOB_ORDERS: "ALL_JOB_ORDERS",
  MANAGE_USERS: "MANAGE_USERS",
  properties: {
    LOGIN: { name: "Login" },
    MY_JOB_ORDERS: { name: "My Job Orders" },
    ALL_JOB_ORDERS: { name: "All Job Orders" }, 
    MANAGE_USERS: { name: "Manage Users" }
  }
};

const roleEnums = {
  ADMINISTRATOR: "ADMINISTRATOR",
  SALES: "SALES",
  OPERATIONS: "OPERATIONS",
  VIEWER: "VIEWER",
  properties: {
    ADMINISTRATOR: {
      name: "Administrator",
      defaultView: viewEnums.MY_JOB_ORDERS
    },
    SALES: { name: "sales", defaultView: viewEnums.MY_JOB_ORDERS },
    OPERATIONS: { name: "Operations", defaultView: viewEnums.ALL_JOB_ORDERS },
    VIEWER: { name: "Viewer", defaultView: viewEnums.ALL_JOB_ORDERS }
  }
};

module.exports = {
  roleEnums,
  viewEnums
};
