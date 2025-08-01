import multer from "multer"
import {v4 as uuid} from 'uuid'
import path from 'node:path';

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        const pathStorage = path.join('public', 'uploads') //une strings->/public/uploads
        cb(null, pathStorage)
    },
    filename: function(req,file,cb){ //cb quiere decir callback
        const extension = file.originalname.split('.').pop() //separa strings, al crearme un array de lo que esta separado por el punto, voy a tener en la ultima posicion la extension, uso .pop() para usarla 
        const uniqueSuffix = Date.now() +  uuid()
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension)
    }
}) 

export default storage