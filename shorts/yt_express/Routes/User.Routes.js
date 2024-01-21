const express = require("express");
const { addUser, loginUser, getUsers } = require("../Controllers/User.Controller")
const UserRoutes = express.Router();


UserRoutes.get("/getUsers", getUsers);
UserRoutes.post("/adduser", addUser);
UserRoutes.post("/loginuser", loginUser);

module.exports = UserRoutes;