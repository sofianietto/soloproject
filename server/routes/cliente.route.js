const express = require("express");

const ClienteController = require("../controllers/cliente.controller");
const ClienteRouter = express.Router();

//api/ClienteS/
ClienteRouter.post("/", ClienteController.createNewCliente);
ClienteRouter.get("/", ClienteController.getAllCliente);
ClienteRouter.get("/:id", ClienteController.getOneClienteById);




module.exports = ClienteRouter;