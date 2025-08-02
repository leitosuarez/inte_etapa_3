import express from 'express'
import 'dotenv/config'
import connectionToDB from './utils/connection.js'
import routerProducts from './routers/productos.router.js'
import routerUsers from './routers/usuarios.router.js'
import routerUploads from './routers/upload.router.js'
import path from 'node:path'
import cors from 'cors'

const app = express()

//constantes
const PORT = process.env.PORT //NO SE CARGA EN EL REMOTO LA VARIABLE PORT
//const URI_DB = process.env.URI_LOCAl
const URI_DB = process.env.URI_REMOTA
const URL_FRONT = process.env.URL_FRONTEND_CORS
//console.log(URI_DB)

//configuaraciones
const corsConfig = {
    origin:URL_FRONT //prod: url completa de netlify, la url a mi front end ; dev: puerto de vite 5173 o 3000 no me acuerdo
}
//middlewares
app.use(express.json())
app.use(express.static(path.join('public')))// para poder acceder a public
app.use(cors(corsConfig)) //si no le paso configuracion, todas las urls del mundo se podran conectar a mi back, cosa que no queremos, queremos que solo nuestro front pueda acceder a nuestro backend

//rutas
app.get('/', (req,res)=>{
    res.send('hello world')
})

app.use('/api/v1/productos', routerProducts)
app.use('/api/v1/usuarios', routerUsers)
app.use('/api/v1/uploads', routerUploads)

//http://localhost:8080/api/v1/productos

/* get.all('*', (req,res)=>{
    res.status(400).json({
        ruta:`${req.url}`,
        metodo:`${req.method}`,
        mensaje:'No se encontro el recurso al que estas queriendo acceder'
    })
})
 */

app.listen(PORT,(err)=>{
    if(err) throw new Error('no se pudo levantar el servidor')
    console.log(`server escuchando en el puerto htpp://localhost:${PORT}`)
    connectionToDB(URI_DB)
})
