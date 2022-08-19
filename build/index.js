"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const createUsuario_1 = __importDefault(require("./endpoints/createUsuario"));
const deleteUsuario_1 = __importDefault(require("./endpoints/deleteUsuario"));
const editUsuario_1 = __importDefault(require("./endpoints/editUsuario"));
const getAlunosById_1 = __importDefault(require("./endpoints/getAlunosById"));
const getUsuario_1 = __importDefault(require("./endpoints/getUsuario"));
app_1.default.post("/usuario/signup", createUsuario_1.default);
app_1.default.get("/usuario", getUsuario_1.default);
app_1.default.get("/usuario/:id", getAlunosById_1.default);
app_1.default.put("/edit/usuario/:id", editUsuario_1.default);
app_1.default.delete("/delete/usuario/:id", deleteUsuario_1.default);
//# sourceMappingURL=index.js.map