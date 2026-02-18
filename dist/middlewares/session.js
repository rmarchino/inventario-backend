"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handle_1 = require("../shared/utils/jwt.handle");
const checkJwt = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop(); // Elimina "Bearer " y se queda con el token
        const isUser = (0, jwt_handle_1.verifyToken)(`${jwt}`);
        if (!isUser) {
            res.status(401);
            res.send("INVALID_TOKEN");
        }
        else {
            req.user = isUser; // Inyectamos el usuario en la request
            next(); // Pasa a la siguiente función
        }
    }
    catch (e) {
        console.log({ e });
        res.status(400);
        res.send("SESSION_NO_VALID");
    }
};
exports.checkJwt = checkJwt;
//# sourceMappingURL=session.js.map