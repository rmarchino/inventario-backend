import { Response } from "express";
import { RequestExt } from "../../../middlewares/session";
import {
  checkCashStatus,
  openCashSession,
} from "../services/cash-sessions.service";
import { handleHttp } from "../../../shared/utils/error.handle";

const getStatusCtrl = async (req: RequestExt, res: Response) => {
  try {
    const userId = (req.user as { id: string }).id;
    const response = await checkCashStatus(userId);

    if (response === "USER_OR_BRANCH_NOT_FOUND") {
      res.status(404).json({ message: "Usuario o sucursal no encontrado" });
    } else {
      res.json(response);
    }
  } catch (error) {
    handleHttp(res, "ERROR_CHECKING_CASH_STATUS", error);
  }
};

const openCashCtrl = async (req: RequestExt, res: Response) => {
  try {
    const userId = (req.user as { id: string }).id;
    const { body } = req;

    const response = await openCashSession(userId, body);

    if (response === "USER_OR_BRANCH_NOT_FOUND") {
      res.status(400).json({ message: "Usuario o sucursal no encontrado" });
    } else if (response === "CASH_ALREADY_OPEN") {
      res.status(400).json({ message: "Ya hay una caja abierta para esta sucursal" });
    } else {
      res.status(201).json(response);
    }
  } catch (error) {
    handleHttp(res, "ERROR_OPENING_CASH_SESSION", error);
  }
};


export { getStatusCtrl, openCashCtrl };