import connection from "../connection"
import { usuarioTableName } from "../types"

    
    connection.raw(`
    CREATE TABLE IF NOT EXISTS ${usuarioTableName} (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        cpf VARCHAR(255) NOT NULL UNIQUE,
        tel VARCHAR(255),
        bairro VARCHAR(255) NOT NULL,
        cep INT(8) VARCHAR(10) NOT NULL
    );
    `).then(() => {
        console.log("MySql tables were sucessfully created")
    })
    .catch(error =>
        console.log(error.message)
    ).finally(() => {
        connection.destroy()
    })