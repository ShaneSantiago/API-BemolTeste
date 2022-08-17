import { Request, Response } from "express"
import connection from "../connection"
import { usuarioTableName } from "../types"

const getUsuarioById = async (req: Request, res: Response): Promise<void> => {
    
    try {

        const usuarioId = req.params.id

        const [usuario] = await connection(usuarioTableName)
        .where({ id: usuarioId })

        const { id, nome, cpf, tel, bairro, cep } = usuario

        res.send({ id, nome, cpf, tel, bairro, cep })

        
    } catch (error: any) {
        console.log(error.message)

        if (res.statusCode === 200) {
            res.status(500).send("Internal server error")
        } else {
            res.send(error.message)
        }
    }
}
export default getUsuarioById