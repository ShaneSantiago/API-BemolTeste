import { Request, Response } from "express"
import connection from "../connection"
import { usuarios_cadastro } from "../types"

const getUsuarios = async (req: Request, res: Response): Promise<void> => {

    try {

        const id = req.query.body || "%"
        const nome = req.query.nome || "%"
        const cpf = req.query.cpf || "%"
        const tel = req.query.tel || "%"
        const bairro = req.query.bairro || "%"
        const cep = req.query.cep || "%"
        const cidade = req.query.cidade || "%"
        const logradouro = req.query.logradouro || "%"
        const uf = req.query.uf || "%"

        const usuario: usuarios_cadastro[]  = await connection("usuarios_cadastrados")
        .where("nome", "LIKE", `%${nome}%`)
        .where("cpf", "LIKE", `%${cpf}%`)
        .where("tel", "LIKE", `%${tel}%`)
        .where("id", "LIKE", `%${id}%`)
        .where("bairro", "LIKE", `%${bairro}%`)
        .where("cep", "LIKE", `%${cep}%`)
        .where("cidade", "LIKE", `%${cidade}%`)
        .where("logradouro", "LIKE", `%${logradouro}%`)
        .where("uf", "LIKE", `%${uf}%`)
        res.send(usuario)

        
    } catch (error: any) {
        console.log(error.message)

        if (res.statusCode === 200) {
            res.status(500).send("Internal server error")
        } else {
            res.send(error.message)
        }
    }
}

export default getUsuarios