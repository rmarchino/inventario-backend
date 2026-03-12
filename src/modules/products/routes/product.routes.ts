import { Router } from "express";
import {searchPosProductCtrl} from "../controllers/products.controller";
import { checkJwt } from "../../../middlewares/session";


const router = Router();

router.get("/pos-search", checkJwt, searchPosProductCtrl);


export default router;