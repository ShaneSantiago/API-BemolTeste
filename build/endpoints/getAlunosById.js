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
const types_1 = require("../types");
const getUsuarioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarioId = req.params.id;
        const [usuario] = yield (0, connection_1.default)(types_1.usuarioTableName)
            .where({ id: usuarioId });
        const { id, nome, cpf, tel, bairro, cep, cidade, logradouro, uf } = usuario;
        res.send({ id, nome, cpf, tel, bairro, cep, cidade, logradouro, uf });
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
exports.default = getUsuarioById;
//# sourceMappingURL=getAlunosById.js.map