import { Router } from "express";
import {ProductController} from "../controllers/product.controller";

const router = Router();

router.post("/", ProductController.create);
router.get("/", ProductController.list);


export default router;