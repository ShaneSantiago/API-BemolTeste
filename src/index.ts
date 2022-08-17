import app from "./app"
import createUsuario from "./endpoints/createUsuario"
import deleteUsuario from "./endpoints/deleteUsuario"
import editUsuario from "./endpoints/editUsuario"
import getUsuarioById from "./endpoints/getAlunosById"
import getUsuarios from "./endpoints/getUsuario"


app.post("/usuario/signup", createUsuario)
app.get("/usuario", getUsuarios)
app.get("/usuario/:id", getUsuarioById)
app.put("/edit/usuario/:id", editUsuario)
app.delete("/delete/usuario/:id", deleteUsuario)