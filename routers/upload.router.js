import express from 'express'
import controller from '../controllers/upload.controller.js'
import uploadsMiddleware from '../middlewares/uploadsMiddleware.js'

const routerUploads = express.Router()

routerUploads.post('/', uploadsMiddleware.single('imagen'),controller.uploadImage)
//single('imagen') me sirve para saber cual es la key del formulario que se envia por ej por postman que tengo que agarrar. Esto es necesario sino multer no lo va a entender
export default routerUploads