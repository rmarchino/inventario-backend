import { Request, Response } from "express";
import { loginUser } from "../auth.service";
import { handleHttp } from "../../../shared/utils/error.handle";

const loginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const { username, password } = body;
    const responseUser = await loginUser({ username, password });

    if (
      responseUser === "PASSWORD_INCORRECT" ||
      responseUser === "USER_NOT_FOUND"
    ) {
      res.status(403);
      res.send(responseUser);
    } else {
      res.send(responseUser);
    }
  } catch (error) {
    handleHttp(res, "ERROR_LOGIN", error);
  }
};

export { loginCtrl };
