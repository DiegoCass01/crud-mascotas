import "dotenv/config";
import express from "express";
import routeMascotas from "./routes/mascotas.js";

const app = express();

app.use("/mascotas", routeMascotas);

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
} catch (error) {
  console.error(e);
}
