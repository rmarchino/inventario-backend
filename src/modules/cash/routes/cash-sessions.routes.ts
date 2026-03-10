import { Router } from "express";
import {
  getStatusCtrl,
  openCashCtrl,
} from "../controllers/cash-sessions.controller";
import { checkJwt } from "../../../middlewares/session";

const router = Router();

router.get("/status", checkJwt, getStatusCtrl);
router.post("/open", checkJwt, openCashCtrl);

export default router;
