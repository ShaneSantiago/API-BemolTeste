import { Request, Response } from "express";
import  connection  from "../connection"

export default async function deleteUsuario(
  req: Request,
  res: Response
): Promise<void> {
  try {
      
    const id = req.params.id;
    await connection("usuarios_cadastrados").delete().where({ id });

    res.status(201).send("Usuário deletado com sucesso");
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
}