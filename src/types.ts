export type authenticationData = {
    id: string
}

export type usuarios_cadastro = {
    id: string,
    nome: string,
    cpf: string,
    tel: string,
    bairro: string,
    cep: string
}

export const usuarioTableName = "usuarios_cadastrados"