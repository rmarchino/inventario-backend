import { Router } from "express";
import { loginCtrl, loginPinCodeCtrl, registerCtrl } from "../controllers/auth.controller";

const router = Router();

router.post("/login", loginCtrl);
router.post("/login-pin", loginPinCodeCtrl);
router.post("/register", registerCtrl);

export default { router };
