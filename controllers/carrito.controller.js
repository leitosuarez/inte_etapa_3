import carritoModels from "../models/carrito.models.js"

const getAllCarrito = async(req,res)=> {
    
    try {
        
    } catch (error) {
        
    }
}


const createCarrito = async(req,res)=> {
    const carritoBody = req.body 
    try {
        const createdCarrito = await carritoModels.createCarritoDb(carritoBody)
        res.status(201).json({mensaje:'carrito creado', createdCarrito})
    } catch (error) {
        console.log('[createCarrito]', error)
        res.status(500).json({mensaje:'no se pudo crear el carrito'})
    }
}




export default {
    getAllCarrito,
    createCarrito

}

