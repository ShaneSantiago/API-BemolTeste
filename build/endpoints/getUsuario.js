"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.body || "%";
        const nome = req.query.nome || "%";
        const cpf = req.query.cpf || "%";
        const tel = req.query.tel || "%";
        const bairro = req.query.bairro || "%";
        const cep = req.query.cep || "%";
        const cidade = req.query.cidade || "%";
        const logradouro = req.query.logradouro || "%";
        const uf = req.query.uf || "%";
        const usuario = yield (0, connection_1.default)("usuarios_cadastrados")
            .where("nome", "LIKE", `%${nome}%`)
            .where("cpf", "LIKE", `%${cpf}%`)
            .where("tel", "LIKE", `%${tel}%`)
            .where("id", "LIKE", `%${id}%`)
            .where("bairro", "LIKE", `%${bairro}%`)
            .where("cep", "LIKE", `%${cep}%`)
            .where("cidade", "LIKE", `%${cidade}%`)
            .where("logradouro", "LIKE", `%${logradouro}%`)
            .where("uf", "LIKE", `%${uf}%`);
        res.send(usuario);
    }
    catch (error) {
        console.log(error.message);
        if (res.statusCode === 200) {
            res.status(500).send("Internal server error");
        }
        else {
            res.send(error.message);
        }
    }
});
exports.default = getUsuarios;
//# sourceMappingURL=getUsuario.js.map