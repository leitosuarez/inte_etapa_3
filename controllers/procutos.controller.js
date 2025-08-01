import models from '../models/productos.models.js'

const getAllProducts = async (req,res)=>{

    try {    
        const products = await models.getAllProductsDb()
        res.json(products)
    } catch (error) {
        //throw error
        res.json({mensaje:'error'}).status(404)
    }
}

const getOneProduct = async (req,res)=>{
    const id = req.params.id
    try { 
        const product = await models.getOneProductDb(id)
        res.send(product)
    } catch (error) {
        //throw error
        res.json({mensaje:'no se pudo obetener el prod solicitado'}).status(404)
    }
}

const createProduct = async (req,res)=>{
    const bodyUserToCreate = req.body
    try {
        const userCreated = await models.createProductDb(bodyUserToCreate)
        res.json({mensaje:'creado con exito', userCreated:userCreated}).status(201)
    } catch (error) {
        //throw error
        res.json({mensaje:'error'}).status(500)
    }
    //res.send('create')
    console.log(bodyUserToCreate)
}

const editeProduct = async (req,res)=>{
    const id = req.params.id
    const bodyProdToUpdate = req.body
    try {
        const editedProduct = await models.editeProductDb(id,bodyProdToUpdate)
        res.json({mensaje:`producto ${id}, editado con exito`, editedProduct:editedProduct})
    } catch (error) {
        //throw error
        res.json({mensaje:'error'}).status(500)
    }
    //res.send('update')
}

const deleteProduct = async(req,res)=>{
    const id = req.params.id
    try {
        await models.deleteProductDb(id)
        res.json({mensaje:`producto ${id}, eliminado con exito`})
    } catch (error) {
        //throw error
        res.json({mensaje:'no se puedo eliminar el prodcuto'}).status(500)
    }
    //res.send('delete')
}

export default {
    getAllProducts,
    getOneProduct,
    createProduct,
    editeProduct,
    deleteProduct
}