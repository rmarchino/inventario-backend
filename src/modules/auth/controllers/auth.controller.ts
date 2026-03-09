import { Request, Response } from "express";
import { loginPinCode, loginUser, registerUser } from "../services/auth.service";
import { handleHttp } from "../../../shared/utils/error.handle";

const loginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const { username, password } = body;
    const responseUser = await loginUser({ username, password });

    if (
      responseUser === "PASSWORD_INCORRECT" ||
      responseUser === "USER_NOT_FOUND"
    ) {
      res.status(403).send(responseUser);
    } else {
      res.send(responseUser);
    }
  } catch (error) {
    handleHttp(res, "ERROR_LOGIN", error);
  }
};

const loginPinCodeCtrl = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await loginPinCode(body);
    if (responseUser === "PIN_INCORRECT_OR_USER_INACTIVE") {
      res.status(403).send(responseUser);
    } else {
      res.send(responseUser);
    }
    
  } catch (error) {
    handleHttp(res, "ERROR_LOGIN_PIN_CODE", error);
  }
}

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await registerUser(body);

    if (responseUser === "USER_ALREADY_EXISTS") {
      res.status(409).send("USER_ALREADY_EXISTS");
    } else {
      res.status(201).send(responseUser);
    }
  } catch (error) {
    handleHttp(res, "ERROR_REGISTER", error);
  }
};

export { loginCtrl, loginPinCodeCtrl, registerCtrl };
