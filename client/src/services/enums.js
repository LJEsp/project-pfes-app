const viewEnums = {
  LOGIN: "LOGIN",
  MY_JOB_ORDERS: "MY_JOB_ORDERS",
  ALL_JOB_ORDERS: "ALL_JOB_ORDERS",
  MANAGE_USERS: "MANAGE_USERS",
  properties: {
    LOGIN: { name: "", route: "" },
    MY_JOB_ORDERS: { name: "My Job Orders", route: "/app/my-job-orders" },
    ALL_JOB_ORDERS: { name: "All Job Orders", route: "/app/all-job-orders" },
    MANAGE_USERS: { name: "Manage Users", route: "/app/manage-users" }
  }
};

const roleEnums = {
  ADMINISTRATOR: "ADMINISTRATOR",
  SALES: "SALES",
  OPERATIONS: "OPERATIONS",
  VIEWER: "VIEWER",
  UNAUTHORIZED: "UNAUTHORIZED",
  properties: {
    ADMINISTRATOR: {
      name: "Administrator",
      defaultView: viewEnums.MY_JOB_ORDERS
    },
    SALES: { name: "Sales", defaultView: viewEnums.MY_JOB_ORDERS },
    OPERATIONS: { name: "Operations", defaultView: viewEnums.ALL_JOB_ORDERS },
    VIEWER: { name: "Viewer", defaultView: viewEnums.ALL_JOB_ORDERS },
    UNAUTHORIZED: { name: "Unauthorized", defaultView: viewEnums.LOGIN }
  }
};

module.exports = {
  roleEnums,
  viewEnums
};
