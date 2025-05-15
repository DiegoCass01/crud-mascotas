import express from "express";
const route = express.Router();
import usuarioController from "../controllers/usuarios.js";
import { verificarToken } from "../helpers/auth.js";

route.post("/register", usuarioController.register);
route.post("/login", usuarioController.login);
route.get("/profile", verificarToken, usuarioController.profile);

export default route;
