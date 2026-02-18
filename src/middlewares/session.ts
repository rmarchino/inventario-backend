import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../shared/utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop(); // Elimina "Bearer " y se queda con el token
    const isUser = verifyToken(`${jwt}`) as { id: string };

    if (!isUser) {
      res.status(401);
      res.send("INVALID_TOKEN");
    } else {
      req.user = isUser; // Inyectamos el usuario en la request
      next(); // Pasa a la siguiente función
    }
  } catch (e) {
    console.log({ e });
    res.status(400);
    res.send("SESSION_NO_VALID");
  }
};

export { checkJwt };
export type { RequestExt };
