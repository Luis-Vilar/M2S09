const connection = require("../database/connection");
const {  INTEGER } = require("sequelize");

const UserRoles = connection.define("userRoles", {
  id: {type : INTEGER, primaryKey: true},
  userId: INTEGER,
  roleId: INTEGER,
});

module.exports = UserRoles;
