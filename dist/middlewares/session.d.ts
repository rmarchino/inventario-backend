import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
interface RequestExt extends Request {
    user?: string | JwtPayload;
}
declare const checkJwt: (req: RequestExt, res: Response, next: NextFunction) => void;
export { checkJwt };
export type { RequestExt };
//# sourceMappingURL=session.d.ts.map