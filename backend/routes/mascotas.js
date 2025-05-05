import express from "express";
const route = express.Router();
import mascotaController from "../controllers/mascotas.js";

route.post("/", mascotaController.create);
route.get("/:id", mascotaController.getOne);
route.get("/", mascotaController.getAll);
route.put("/:id", mascotaController.update);
route.delete("/:id", mascotaController.delete);

export default route;
