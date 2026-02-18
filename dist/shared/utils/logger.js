"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const logger = winston_1.default.createLogger({
    level: process.env.LOG_LEVEL || "",
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
    }), winston_1.default.format.errors({ stack: true }), winston_1.default.format.splat(), winston_1.default.format.json()),
    transports: [
        new winston_1.default.transports.Console({
            format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.simple()),
            level: "debug",
        }),
        new winston_1.default.transports.File({
            filename: "logs/combined.log",
            level: "info",
        }),
        new winston_1.default.transports.File({
            filename: "logs/error.log",
            level: "error",
        }),
    ],
    exceptionHandlers: [
        new winston_1.default.transports.File({ filename: "logs/exceptions.log" }),
    ],
    rejectionHandlers: [
        new winston_1.default.transports.File({ filename: "logs/rejections.log" }),
    ],
});
// En un entorno de producción, enviar logs a un servicio externo
// if (process.env.NODE_ENV === 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.json(), // JSON para logs de producción
//     level: 'info'
//   }));
// }
exports.default = logger;
//# sourceMappingURL=logger.js.map