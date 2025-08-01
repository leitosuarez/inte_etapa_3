import usuariosModels from "../models/usuarios.models.js"
const usuariosGetAll = async (req,res)=>{

    try {
        const users = await usuariosModels.usuariosGetAllDb()
        res.json(users)
    } catch (error) {
        res.json({mensaje:'error'})
    }
    
}

const usuariosGetOne = async (req,res)=>{
    const id = req.params.id
    try {
        const user = await usuariosModels.usuariosGetOneDb(id)
        res.json(user)
    } catch (error) {
        res.json({mensaje:'error'})
    }
    
}

const usuariosCreate = async (req,res)=>{
    const bodyUser = req.body
    const {nombre,apellido,password, confirm_password} = bodyUser
    
    if(password != confirm_password){
        console.log('no coincide la contraseña')
        return res.json({mensaje:'las contraseñas no coinciden'}).status(500)
    } //retorna y no deja crear el usuario, es como un break

    //controlar si el usuario esta repetido

    try {
        const userCreated = await usuariosModels.usuariosCreateDb(bodyUser)
        const nameUserCreated = userCreated.nombre
        res.json({mensaje:`el usuario con el nombre ${nameUserCreated}, fue creado con exito`})
    } catch (error) {
        res.json({mensaje:'error'}).status(500)
        console.log(error)
    }
}

const usuariosUpdate = async (req,res)=>{
    const id = req.params.id
    const bodyUser = req.body
    try {
        const userUpdated = await usuariosModels.usuariosUpdateDb(id,bodyUser)
        res.json({mensaje:`el usuario con el id ${userUpdated._id}, fue editado con exito`, userUpdated:userUpdated})
    } catch (error) {
        res.json({mensaje:'error'})
    }

}

const usuariosDelete = async (req,res)=>{
    //const id = req.params.id
    const id = req.query.id
    const options = req.body
    if (id!= undefined){options.id = id}
    try {
        const userDeleted = await usuariosModels.usuariosDeleteDb(options)
        if (userDeleted.deletedCount > 1) {
            res.json({mensaje:`se eliminaron ${userDeleted.deletedCount} usuarios`})
        } else{
            res.json({mensaje:`el usuario con el id ${id} fue eliminado`})
        }
    } catch (error) {
        res.json({mensaje:'error'})
    }
}

export default {
    usuariosGetAll,
    usuariosGetOne,
    usuariosCreate,
    usuariosUpdate,
    usuariosDelete
}

//TERMINAR TODO ESTOs
