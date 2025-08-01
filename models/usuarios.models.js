import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:String,
    password:{
        type:String,
        required:true
    },
    confirm_password:String,
    correo:{
        type:String,
        required:true, 
        unique:true
    },
    dni:String

},{timestamps:true,versionKey:false})

const userModel = mongoose.model('usuarios',userSchema)

const usuariosGetAllDb = async()=>{
    
    try {
        const users = await userModel.find({})
        return users
    } catch (error) {
        console.log(error)
    }
}

const usuariosGetOneDb = async(id)=>{
    
    try {
        const user = await userModel.find({_id:id},{confirm_password:false})
        return user
    } catch (error) {
        console.log(error)
    }
}

const usuariosCreateDb = async(bodyUser)=>{
    
    try {
        const userToCreate = await new userModel(bodyUser)
        const userCreated = userToCreate.save()
        return userCreated
    } catch (error) {
        console.log(error)
    }
}

const usuariosUpdateDb = async(id,bodyUser)=>{
    
    try {
        const userUpdated = await userModel.updateOne({_id:id}, {$set:{...bodyUser}, new:true})
        return userUpdated
    } catch (error) {
        console.log(error)
    }
}

const usuariosDeleteDb = async(options)=>{
    //const userDeleted = null
    console.log(options)
    try {
        if (options.deleteType === 'filter'){
            const filter = options.filter
            const usersDeleted = await userModel.deleteMany(filter)
            console.log(usersDeleted)
            return usersDeleted
        } else {
            const userId = options.id
            const userDeleted = await userModel.deleteOne({_id:userId})
            return userDeleted
        }
    } catch (error) {
        console.log(error)
    }
}

export default {
    usuariosGetAllDb,
    usuariosGetOneDb,
    usuariosCreateDb,
    usuariosUpdateDb,
    usuariosDeleteDb
}