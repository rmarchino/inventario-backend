"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = __importDefault(require("./shared/utils/logger"));
const auth_1 = __importDefault(require("./modules/auth"));
const products_1 = __importDefault(require("./modules/products"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("dev"));
// Rutas
app.use("/api", auth_1.default);
app.use("/api", products_1.default);
app.get("/ping", (req, res) => {
    logger_1.default.info("Pong! El servidor está vivo");
});
exports.default = app;
//# sourceMappingURL=app.js.map