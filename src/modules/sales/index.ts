import { Router } from "express";
import saleRoutes from "./routes/sales.routes";

const router = Router();

<<<<<<< HEAD
router.use("/sales", saleRoutes);
=======
router.use("/sales", saleRoutes.router);
>>>>>>> feature/metricas-ventas-hoy

export default router;
