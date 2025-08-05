import express from 'express'
import carritoController from '../controllers/carrito.controller.js'
const routerCarrito = express.Router()

routerCarrito.get('/', carritoController.getAllCarrito) //no tiene get por el momento
routerCarrito.post('/', carritoController.createCarrito)


export default routerCarrito