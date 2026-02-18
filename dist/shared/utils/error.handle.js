"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (res, error, errorRaw) => {
    console.log(errorRaw); // Para ver el error real en consola del servidor
    res.status(500).send({ error });
};
exports.handleHttp = handleHttp;
//# sourceMappingURL=error.handle.js.map