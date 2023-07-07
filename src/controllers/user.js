const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
const JWT_SECRET = process.env.JWT_SECRET;
config();

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async store(req, res) {
    try {
      const { traineeId, name, email, password } = req.body;
      const user = await User.create({ traineeId, name, email, password });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new UserController();
