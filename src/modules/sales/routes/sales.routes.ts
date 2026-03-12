import { Router } from "express";
import { getTodaySummaryCtrl } from "../controllers/sales.controller";
import { checkJwt } from "../../../middlewares/session";

const router = Router();

router.get("/today-summary", checkJwt, getTodaySummaryCtrl);

export default { router };
