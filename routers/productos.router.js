import express from 'express'
import productosController from '../controllers/productos.controller.js'
const routerProducts = express.Router()

//http://localhost:8080/api/v1/productos

routerProducts.get('/', productosController.getAllProducts)

routerProducts.get('/:id', productosController.getOneProduct)

routerProducts.post('/', productosController.createProduct)

routerProducts.put('/:id', productosController.editeProduct)

routerProducts.delete('/:id', productosController.deleteProduct)

export default routerProducts
