const { index, show, store } = require("../../controllers/user");
const { Router } = require("express");
const { login, checkToken } = require("../../middlewares/index").auth;

class userRouter {
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get("/users/index", checkToken, index);
    this.router.get("/users/show/:id",checkToken, show);
    this.router.post("/users/store", store);
    this.router.post("/users/login", login);
  }
}

module.exports = new userRouter().router;
