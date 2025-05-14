import express from "express";
const route = express.Router();
import usuarioController from "../controllers/usuarios.js";

route.post("/register", usuarioController.register);

export default route;
