const { Router } = require("express");
const router = Router();

const traineeRoutes = require("./v1/trainee.js");
const companiesRoutes = require("./v1/companies.js");
const contractRoutes = require("./v1/contract.js");
const categoriesRoutes = require("./v1/categories.js");
const userRoutes = require("./v1/user.js");

router.use([traineeRoutes, companiesRoutes, contractRoutes, categoriesRoutes, userRoutes]);

module.exports =  router ;
