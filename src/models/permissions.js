const connection = require("../database/connection");
const { STRING, INTEGER, DATE } = require("sequelize");
const Roles = require("./roles.js");
const { PermissionsRoles } = require("./permission_roles.js");

const Permissions = connection.define(
  "permissions",
  {
    id: {
      type: INTEGER,
      primaryKey: true,
    },
    description: {
      type: STRING,
      validate: {
        len: [1, 1000],
        msg: "Descriçao deve ter entre 1 e 1000 caracteres",
      },
      unique: {
        msg: "Descriçao ja cadastrada",
      },
    },
    createdAt: DATE,
    updatedAt: DATE,
  },
  {
    underscored: true,
    paranoid: true,
  }
);
Permissions.belongsToMany(Roles, {
  through: PermissionsRoles,
});
Roles.belongsToMany(Permissions, {
  through: PermissionsRoles,
});
module.exports = Permissions;
