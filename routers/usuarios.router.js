import express from 'express'
import usuariosController from '../controllers/usuarios.controller.js'
const routerUsers = express.Router()

routerUsers.get('/', usuariosController.usuariosGetAll)

routerUsers.get('/:id', usuariosController.usuariosGetOne)

routerUsers.post('/', usuariosController.usuariosCreate)

routerUsers.put('/:id', usuariosController.usuariosUpdate)

//routerUsers.delete('/:id', usuariosController.usuariosDelete) opcion normal, pero como quiero probar cosas, recibire el id por query xd
routerUsers.delete('/', usuariosController.usuariosDelete)

export default routerUsers