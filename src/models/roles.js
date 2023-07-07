const connection = require("../database/connection");
const { STRING, INTEGER, DATE } = require("sequelize");

const Roles = connection.define(
  "roles",
  {
    id: {type :INTEGER, primaryKey: true},
    description: STRING,
    createdAt: DATE,
    updatedAt: DATE,
  },
  {
    underscored: true,
    paranoid: true,
  }
);

module.exports = Roles;
