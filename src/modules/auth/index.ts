import { Router } from "express";
import authRoutes from "./routes/auth.route";

const router = Router();

router.use("/auth", authRoutes.router);

export default router;