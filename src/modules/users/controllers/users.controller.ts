import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/users.service";
import { handleHttp } from "../../../shared/utils/error.handle";

interface Params {
  id: string;
}

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getAllUsers();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_USERS", error);
  }
};

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getUserById(id as string);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_USER", error);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await updateUser(id as string, req.body);

    if (
      response === "USER_NOT_FOUND" ||
      response === "PIN_ALREADY_IN_USE" ||
      response === "USERNAME_ALREADY_IN_USE"
    ) {
      res.status(400).send(response);
    } else {
      res.send(response);
    }
    
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_USER", error);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteUser(id as string);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_USER", error);
  }
};

export { getItems, getItem, updateItem, deleteItem };
