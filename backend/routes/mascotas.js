import express from "express";
const route = express.Router();
import mascotaController from "../controllers/mascotas.js";
import { verificarToken } from "../helpers/auth.js";

route.post("/", mascotaController.create);
route.get("/:id", mascotaController.getOne);
route.get("/", mascotaController.getAll);
route.put("/:id", verificarToken, mascotaController.update);
route.delete("/:id", verificarToken, mascotaController.delete);

export default route;
