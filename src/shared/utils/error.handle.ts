import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw); // Para ver el error real en consola del servidor
  res.status(500).send({ error });
};

export { handleHttp };
