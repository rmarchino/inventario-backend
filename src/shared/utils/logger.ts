import winston from "winston";
import path from "node:path";
import fs from "fs";

const logDir = path.join(process.cwd(), "logs");

// Crear carpeta logs si no existe
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "",

  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),

  transports: [
    new winston.transports.Console({
      level: "debug",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ level, message, timestamp, stack }) => {
          return `${timestamp} ${level}: ${stack || message}`;
        }),
      ),
    }),

    new winston.transports.File({
      filename: path.join(logDir, "combined.log"),
      level: "info",
    }),

    new winston.transports.File({
      filename: path.join(logDir, "error.log"),
      level: "error",
    }),
  ],

  exceptionHandlers: [
    new winston.transports.File({
      filename: path.join(logDir, "exceptions.log"),
    }),
  ],
  rejectionHandlers: [
    new winston.transports.File({
      filename: path.join(logDir, "rejections.log"),
    }),
  ],
});

export default logger;
