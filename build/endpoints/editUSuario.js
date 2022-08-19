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
function editUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const { nome, cpf, tel, bairro, cep, cidade, logradouro, uf } = req.body;
            if (!nome && !cpf && !tel && !bairro && !cep && !cidade && !logradouro && !uf) {
                res.statusCode = 422;
                throw new Error("Informe os novos nome, nascimento, cpf, tel ou bairro'");
            }
            yield (0, connection_1.default)('usuarios_cadastrados')
                .update({ nome, cpf, tel, bairro, cep, cidade, logradouro, uf })
                .where({ id });
            res.status(201).send("Usuário editado com sucesso");
        }
        catch (error) {
            if (res.statusCode === 200) {
                res.status(500).end({ message: error.message });
            }
            res.send({ message: error.message });
        }
    });
}
exports.default = editUsuario;
//# sourceMappingURL=editUsuario.js.map