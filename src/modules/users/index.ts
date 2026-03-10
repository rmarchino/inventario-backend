import { Router } from "express";
import userRoutes from "./routes/user.routes";

const router = Router();

router.use("/users", userRoutes.router);

export default router;