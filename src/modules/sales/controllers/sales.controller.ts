import { Response } from "express";
import { RequestExt } from "../../../middlewares/session";
import { getTodaySummary } from "../services/sales.service";
import { handleHttp } from "../../../shared/utils/error.handle";

const getTodaySummaryCtrl = async (req: RequestExt, res: Response) => {
  try {
    const userId = (req.user as { id: string }).id;
    const response = await getTodaySummary(userId);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_TODAY_SUMMARY", error);
  }
};


export { getTodaySummaryCtrl };