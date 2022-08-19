import { Request, Response } from "express"
import connection from "../connection"
import generateId from "../Services/idGenerator"
import { usuarioTableName } from "../types"

const createUsuario = async (req: Request, res: Response): Promise<void> => {

    try {

        const {nome, cpf, tel, bairro, cep, cidade, logradouro, uf} = req.body

        if (!nome || !cpf || !tel || !bairro || !cep || !cidade || !logradouro || !uf) {
            res.statusCode = 422
            throw new Error("Preencha todos os campos'")
         }

         const [usuario] = await connection('usuarios_cadastrados')
         .where({ cpf })

      if (usuario) {
         res.statusCode = 409
         throw new Error('CPF já cadastrado')
      }

        const id: string = generateId()
        
        await connection(usuarioTableName)
        .insert({
            id,
            nome,
            cpf,
            tel,
            bairro,
            cep,
            cidade,
            logradouro,
            uf
        })


        res.send("Criado com sucesso")
        
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send(error.message)
         } else {
            res.send({ message: error.message })
         }
    }
}
export default createUsuario