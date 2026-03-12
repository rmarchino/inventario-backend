import { Request, Response } from "express";
import { RequestExt } from "../../../middlewares/session";
import { searchPosProducts } from "../services/products.service";
import { handleHttp } from "../../../shared/utils/error.handle";

const searchPosProductCtrl = async (req: RequestExt, res: Response) => {
  try {
    const userId = (req.user as { id: string }).id;
    const { search, categoryId } = req.query;

    const response = await searchPosProducts(
      userId,
      search as string,
      categoryId as string,
    );

    if (response === "USER_OR_BRANCH_NOT_FOUND") {
      res.status(400).send("Usuario o sucursal no encontrados");
    } else {
      res.send(response);
    }
  } catch (error) {
    handleHttp(res, "ERROR_SEARCHING_PRODUCTS", error);
  }
};

export { searchPosProductCtrl };
