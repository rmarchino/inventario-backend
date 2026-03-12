import { Router } from "express";
import saleRoutes from "./routes/sales.routes";

const router = Router();

router.use("/sales", saleRoutes.router);

export default router;
