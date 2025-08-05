import express from 'express'
import carritoController from '../controllers/carrito.controller.js'
const routerCarrito = express.Router()

routerCarrito.get('/', carritoController.getAllCarrito)

routerCarrito.post('/', carritoController.createCarrito)


export default routerCarrito