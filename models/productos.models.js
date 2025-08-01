import mongoose from "mongoose"

//Creamos en esquema en este archivo
const productSchema = mongoose.Schema({
    nombre:{type:String, required:true},
    precio:Number,
    stock:Number,
    categoria:String,
    detalles:String,
    foto:String,
    envio:Boolean

},{timestamps:true, versionKey:false})

//creamos el modelo a partir del esquema -> definir colecciones donde se van a guardar los documentos
const productModel = mongoose.model('productos',productSchema) //->me va a permitir interactuar con la db

const getAllProductsDb = async ()=>{

    try {
        const products = await productModel.find()
        return products
        //console.log('getAllProductsDB',products)
    } catch (error) {
        throw new Error('No se pudo realizar la peticion',error)
        
    }
}

const getOneProductDb = async (id)=>{ //6888e87674784a0b33718dc4
    
    try {
        const product = await productModel.find({_id:id})
        return product
    } catch (error) {
        throw new Error('No se pudo realizar la peticion',error)
    }

}

const createProductDb = async (newProduct)=>{

    try {  
        const userCreated = await productModel.insertOne(newProduct)
        return userCreated
        //otra forma de hacerlo:
        //const productToCreate = new productModel(newProduct)
        //const productCreated = productToCreate.save()
    } catch (error) {
        throw new Error('No se pudo realizar la peticion',error)
    }
    //console.log('createProductDB')
}

const editeProductDb = async (id,bodyProdToUpdate)=> {

    try {
        const editedProduct = await productModel.updateOne({_id:id},{$set:{...bodyProdToUpdate}, new:true})//new:false devuelve la ultima version del documento antes de la edicion, true devuelve la ultima, osea ya editado
        return editedProduct
    } catch (error) {
        throw new Error('No se pudo realizar la peticion',error)
    }
    //console.log('editeProductDB')
}

const deleteProductDb = async (id)=> {

    try {
        await productModel.deleteOne({_id:id})
    } catch (error) {
        throw new Error('No se pudo realizar la peticion',error)
    }
    console.log('deleteDB')
}

export default {
    getAllProductsDb,
    getOneProductDb,
    createProductDb,
    editeProductDb,
    deleteProductDb
}