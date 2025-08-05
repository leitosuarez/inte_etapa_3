import mongoose from "mongoose"

const carritoSchema = mongoose.Schema({
    carrito:{
        type:Array,
        required:true
    },
    usuario:Object
},{
    timestamps:true,
    versionKey:false
})

const carritoModel = mongoose.model('carritos', carritoSchema)

const getAllCarritoDb = async()=> {
    
    try {
        
    } catch (error) {
        
    }
}

const createCarritoDb = async(carritoBody)=> {
    
    try {
        const newCarrito = new carritoModel(carritoBody) //tiene que recibir un obj, creo que si recibe de una un array se rompe
        const newCarritoCreated = newCarrito.save()
        return newCarritoCreated
    } catch (error) {
        throw error
    }
}

export default {
    getAllCarritoDb,
    createCarritoDb
}
