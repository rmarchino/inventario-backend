import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { AppDataSource } from "./config/data-source";
import logger from "./shared/utils/logger";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    logger.info("✅ Base de Datos conectada con éxito")

    app.listen(PORT, () => {
      logger.info(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    logger.error("❌ Error al conectar a la Base de Datos:", error);
  });
