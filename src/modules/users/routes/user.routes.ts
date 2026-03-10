import { Router } from "express";
import { getItems, getItem, updateItem, deleteItem } from "../controllers/users.controller";
import { checkJwt } from "../../../middlewares/session";

const router = Router();

router.get("/", checkJwt, getItems);
router.get("/:id",checkJwt, getItem);
router.patch("/:id", checkJwt, updateItem);
router.delete("/:id",checkJwt, deleteItem);

export default {router};