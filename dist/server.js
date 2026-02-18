"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./config/data-source");
const logger_1 = __importDefault(require("./shared/utils/logger"));
const PORT = process.env.PORT || 3000;
data_source_1.AppDataSource.initialize()
    .then(() => {
    logger_1.default.info("✅ Base de Datos conectada con éxito");
    app_1.default.listen(PORT, () => {
        logger_1.default.info(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    logger_1.default.error("❌ Error al conectar a la Base de Datos:", error);
});
//# sourceMappingURL=server.js.map