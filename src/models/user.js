const connection = require("../database/connection");
const { STRING, INTEGER } = require("sequelize");
const Trainee = require("./trainee.js");
const Roles = require("./roles.js");
const UserRoles = require("./user_roles.js");

const User = connection.define("users", {
  id: {
    type: INTEGER,
    primaryKey: true,
  },
  traineeId: {
    type: INTEGER,
    allowNull: false,
    relations: {
      model: "trainees",
      key: "id",
    },
    validate: {
      notNull: {
        msg: "O campo traineeId não pode ser nulo",
      },
      notEmpty: {
        msg: "O campo traineeId não pode ser vazio",
      },
    },
  },
  name: STRING,
  email: STRING,
  password: STRING,
},{
    timestamps: false,
});
User.belongsTo(Trainee, {
    foreignKey: "traineeId",
    as: "trainee",
  });
User.belongsToMany(Roles, {
  through: UserRoles,

});
Roles.belongsToMany(User, {
  through:UserRoles,
});

module.exports = User;
