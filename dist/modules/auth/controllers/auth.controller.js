"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCtrl = void 0;
const auth_service_1 = require("../auth.service");
const error_handle_1 = require("../../../shared/utils/error.handle");
const loginCtrl = async ({ body }, res) => {
    try {
        const { username, password } = body;
        const responseUser = await (0, auth_service_1.loginUser)({ username, password });
        if (responseUser === "PASSWORD_INCORRECT" ||
            responseUser === "USER_NOT_FOUND") {
            res.status(403);
            res.send(responseUser);
        }
        else {
            res.send(responseUser);
        }
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_LOGIN", error);
    }
};
exports.loginCtrl = loginCtrl;
//# sourceMappingURL=auth.controller.js.map