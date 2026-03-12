import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { AppDataSource } from "./config/data-source";
import logger from "./shared/utils/logger";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await AppDataSource.initialize();
    logger.info("✅ Base de Datos conectada con éxito");

    app.listen(PORT, () => {
      logger.info(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error("❌ Error al iniciar el servidor:", error);

    process.exit(1);
  }
}

startServer();

