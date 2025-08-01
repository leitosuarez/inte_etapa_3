import express from 'express'
const routerProducts = express.Router()
import productosController from '../controllers/procutos.controller.js'

//http://localhost:8080/api/v1/productos

routerProducts.get('/', productosController.getAllProducts)

routerProducts.get('/:id', productosController.getOneProduct)

routerProducts.post('/', productosController.createProduct)

routerProducts.put('/:id', productosController.editeProduct)

routerProducts.delete('/:id', productosController.deleteProduct)

export default routerProducts
