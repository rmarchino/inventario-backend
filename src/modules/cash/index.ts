import { Router } from "express";
import cashSessionRoutes from "./routes/cash-sessions.routes";

const router = Router();

router.use("/cash-sessions", cashSessionRoutes);

export default router;
