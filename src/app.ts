import "reflect-metadata";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import logger from "./shared/utils/logger";

import autModule from "./modules/auth";
import userModule from "./modules/users";
import cashSessionModule from "./modules/cash";
import saleModule from "./modules/sales";
import productModule from "./modules/products";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"));

// Rutas
app.use("/api", autModule);
app.use("/api", userModule);
app.use("/api", cashSessionModule);
app.use("/api", saleModule);
app.use("/api", productModule);

app.get("/ping", (req, res) => {
    logger.info("Pong! El servidor está vivo")
});

export default app;
