import "reflect-metadata";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import logger from "./shared/utils/logger";
import { errorHandler } from "./shared/middlewares/error-handler";

import autModule from "./modules/auth";
import userModule from "./modules/users";
import cashSessionModule from "./modules/cash";
import saleModule from "./modules/sales";
import productModule from "./modules/products";

const app = express();

// Seguridad
app.use(cors());
app.use(helmet());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP Logger (Morgan -> Winston)
app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  }),
);

// Rutas
app.use("/api", autModule);
app.use("/api", userModule);
app.use("/api", cashSessionModule);
app.use("/api", saleModule);
app.use("/api", productModule);

// Endpoint de salud del servidor
app.get("/ping", (req, res) => {
  logger.info("🏓 Ping recibido - servidor activo");
  res.json({
    success: true,
    message: "Servidor activo",
  });
});

// Middleware global de errores (SIEMPRE al final)
app.use(errorHandler);

export default app;
