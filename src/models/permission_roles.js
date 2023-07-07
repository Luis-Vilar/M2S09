const connection = require("../database/connection");
const { INTEGER } = require("sequelize");

const PermissionsRoles = connection.define("permissionsRoles", {
  id: { type: INTEGER, primaryKey: true },
  roleId: INTEGER,
  permissionId: INTEGER,
});

module.exports = PermissionsRoles;
