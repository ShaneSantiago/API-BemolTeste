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
const idGenerator_1 = __importDefault(require("../Services/idGenerator"));
const types_1 = require("../types");
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, cpf, tel, bairro, cep, cidade, logradouro, uf } = req.body;
        if (!nome || !cpf || !tel || !bairro || !cep || !cidade || !logradouro || !uf) {
            res.statusCode = 422;
            throw new Error("Preencha todos os campos'");
        }
        const [usuario] = yield (0, connection_1.default)('usuarios_cadastrados')
            .where({ cpf });
        if (usuario) {
            res.statusCode = 409;
            throw new Error('CPF já cadastrado');
        }
        const id = (0, idGenerator_1.default)();
        yield (0, connection_1.default)(types_1.usuarioTableName)
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
        });
        res.send("Criado com sucesso");
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send(error.message);
        }
        else {
            res.send({ message: error.message });
        }
    }
});
exports.default = createUsuario;
//# sourceMappingURL=createUsuario.js.map