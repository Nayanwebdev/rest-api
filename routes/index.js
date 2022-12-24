const express = require("express");

const routes = express.Router();

const apiController = require("../controller/api_controller");

routes.get("/", apiController.apiHome);

routes.post("/addData", apiController.addData);

routes.get("/viewData", apiController.viewData);

routes.get("/updateUser/:id", apiController.updateUser);

routes.post("/editUserData", apiController.editUserData);

routes.get("/deleteUser/:id", apiController.deleteUser);


module.exports = routes;
