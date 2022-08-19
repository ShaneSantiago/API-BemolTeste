"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const types_1 = require("../types");
connection_1.default.raw(`
    CREATE TABLE IF NOT EXISTS ${types_1.usuarioTableName} (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        cpf VARCHAR(255) NOT NULL UNIQUE,
        tel VARCHAR(255),
        bairro VARCHAR(255) NOT NULL,
        cep INT(8) VARCHAR(10) NOT NULL,
        cidade VARCHAR(255) NOT NULL,
        uf VARCHAR(10) NOT NULL
        logradouro: VARCHAR(255) NOT NULL,
    );
    `).then(() => {
    console.log("MySql tables were sucessfully created");
})
    .catch(error => console.log(error.message)).finally(() => {
    connection_1.default.destroy();
});
//# sourceMappingURL=index.js.map