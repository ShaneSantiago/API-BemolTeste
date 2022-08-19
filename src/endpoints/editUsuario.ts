import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../Services/authenticator";
import { authenticationData, usuarios_cadastro } from "../types";

export default async function editUsuario(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const id = req.params.id
      const { nome, cpf, tel, bairro, cep, cidade, logradouro, uf }: usuarios_cadastro = req.body

      
       if (!nome && !cpf && !tel && !bairro && !cep && !cidade && !logradouro && !uf) {
         res.statusCode = 422
         throw new Error("Informe os novos nome, nascimento, cpf, tel ou bairro'")
      }
      await connection('usuarios_cadastrados')
         .update({ nome, cpf, tel, bairro, cep, cidade, logradouro, uf })
         .where({ id })

         res.status(201).send("Usuário editado com sucesso")

   } catch (error: any) {
      if (res.statusCode === 200) {
         res.status(500).end({message: error.message})
      }
      res.send({message: error.message})
   }
}